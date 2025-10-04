<?php

namespace App\Http\Controllers\Concerns;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

trait ManagesFileUploads
{
    /**
     * Get the full public URL for a file on GCS.
     *
     * @param string $filePath
     * @return string
     */
    protected function getGcsUrl(string $filePath): string
    {
        return Storage::disk('gcs')->url($filePath);
    }

    /**
     * Delete a file from the GCS disk.
     *
     * @param string $fileHashName
     * @return void
     */
    protected function deleteFile(string $fileHashName): void
    {
        $filePath = $this->getStorageFolder() . '/' . $fileHashName;
        Storage::disk('gcs')->delete($filePath);
    }

    /**
     * Apply search filters to the query.
     *
     * @param Builder $query
     * @param Request $request
     * @return void
     */
    protected function applySearch(Builder $query, Request $request): void
    {
        if ($search = $request->input('search')) {
            $query->where(function (Builder $q) use ($search) {
                foreach ($this->getSearchableFields() as $field) {
                    $q->orWhere($field, 'like', "%{$search}%");
                }
            });
        }
    }

    /**
     * Get paginated results from the query.
     *
     * @param Builder $query
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    protected function getPaginatedResults(Builder $query, Request $request)
    {
        $perPage = $request->input('perPage', 10);
        return $query->latest()->paginate($perPage)->withQueryString();
    }
}
