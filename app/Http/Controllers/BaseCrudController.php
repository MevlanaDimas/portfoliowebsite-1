<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\ManagesFileUploads;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

abstract class BaseCrudController extends Controller
{
    use ManagesFileUploads;

    /**
     * The Eloquent model class for the resource.
     */
    abstract protected function getModelClass(): string;

    /**
     * The API Resource class for the model.
     */
    abstract protected function getResourceClass(): string;

    /**
     * The Inertia view name for the index page.
     */
    abstract protected function getIndexView(): string;

    /**
     * The Inertia view name for the form (create/edit).
     */
    abstract protected function getFormView(): string;

    /**
     * The route name for the index page.
     */
    abstract protected function getIndexRoute(): string;

    /**
     * The fields to be searched.
     */
    abstract protected function getSearchableFields(): array;

    /**
     * The folder name for file uploads in storage.
     */
    abstract protected function getStorageFolder(): string;

    /**
     * The form request class for create and update operations.
     */
    abstract protected function getFormRequestClass(string $type): string;

    /**
     * The request input name for the file upload.
     */
    abstract protected function getFileRequestInputName(): string;

    /**
     * The model attribute name for the file's hash name.
     */
    abstract protected function getFileHashNameAttribute(): string;

    /**
     * The model attribute name for the file's public URL.
     */
    abstract protected function getFileUrlAttribute(): string;

    /**
     * The model attribute name for the file's original name.
     */
    abstract protected function getFileNameAttribute(): string;

    /**
     * Get additional data to be merged when creating a model.
     */
    protected function getAdditionalStoreData(Request $request): array { return []; }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $modelClass = $this->getModelClass();
        $resourceClass = $this->getResourceClass();
        $query = $modelClass::query();

        $totalCount = $query->count();
        $this->applySearch($query, $request);
        $filteredCount = $query->count();

        $paginatedResults = $this->getPaginatedResults($query, $request);

        $resources = $resourceClass::collection($paginatedResults);

        return Inertia::render($this->getIndexView(), [
            strtolower(class_basename($modelClass)) . 's' => $resources,
            'filters' => $request->only(['search', 'perPage']),
            'totalCount' => $totalCount,
            'filteredCount' => $filteredCount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render($this->getFormView());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $modelClass = $this->getModelClass();
        $model = $modelClass::findOrFail($id);

        return Inertia::render($this->getFormView(), [
            strtolower(class_basename($modelClass)) => $model,
            'isEdit' => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /** @var \Illuminate\Foundation\Http\FormRequest $formRequest */
        $formRequestClass = $this->getFormRequestClass('create');
        $formRequest = app($formRequestClass);

        $validated = $formRequest->validated();

        $fileInputName = $this->getFileRequestInputName();

        if (!$request->hasFile($fileInputName) || !$request->file($fileInputName)->isValid()) {
            return redirect()->back()->with('error', 'A valid file is required.');
        }

        $file = $request->file($fileInputName);
        $filePath = $file->store($this->getStorageFolder(), 'gcs');

        $modelClass = $this->getModelClass();
        $fileData = [
            $this->getFileUrlAttribute() => $this->getGcsUrl($filePath),
            $this->getFileNameAttribute() => $file->getClientOriginalName(),
            $this->getFileHashNameAttribute() => $file->hashName(),
        ];

        $additionalData = $this->getAdditionalStoreData($request);

        $modelClass::create(array_merge($validated, $fileData, $additionalData));

        return redirect()->route($this->getIndexRoute())->with('success', class_basename($modelClass) . ' created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        /** @var \Illuminate\Foundation\Http\FormRequest $formRequest */
        $formRequestClass = $this->getFormRequestClass('update');
        $formRequest = app($formRequestClass);

        $validated = $formRequest->validated();

        $modelClass = $this->getModelClass();
        $model = $modelClass::findOrFail($id);

        $model->fill($validated);

        $fileInputName = $this->getFileRequestInputName();
        $fileHashAttribute = $this->getFileHashNameAttribute();

        if ($request->hasFile($fileInputName) && $request->file($fileInputName)->isValid()) {
            if ($model->{$fileHashAttribute}) {
                $this->deleteFile($model->{$fileHashAttribute});
            }

            $file = $request->file($fileInputName);
            $filePath = $file->store($this->getStorageFolder(), 'gcs');

            $model->{$this->getFileUrlAttribute()} = $this->getGcsUrl($filePath);
            $model->{$this->getFileNameAttribute()} = $file->getClientOriginalName();
            $model->{$this->getFileHashNameAttribute()} = $file->hashName();
        }

        $model->save();

        return redirect()->route($this->getIndexRoute())->with('success', class_basename($modelClass) . ' updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $modelClass = $this->getModelClass();
        $model = $modelClass::findOrFail($id);

        $fileHashAttribute = $this->getFileHashNameAttribute();

        if ($model->{$fileHashAttribute}) {
            $this->deleteFile($model->{$fileHashAttribute});
        }

        $model->delete();

        return redirect()->route($this->getIndexRoute())->with('success', class_basename($modelClass) . ' deleted successfully.');
    }

    protected function applySearch(Builder $query, Request $request): void
    {
        // Implementation is in your ManagesFileUploads trait
    }

    /**
     * Get paginated results for the query.
     */
    protected function getPaginatedResults(Builder $query, Request $request): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        $perPage = $request->input('perPage', 10);

        if ($perPage == -1) {
            $results = $query->get();
            return new \Illuminate\Pagination\LengthAwarePaginator(
                $results, $results->count(), -1
            );
        }

        return $query->paginate($perPage);
    }
}
