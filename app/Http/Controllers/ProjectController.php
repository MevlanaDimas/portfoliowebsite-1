<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseCrudController;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\ProjectCreateFormRequest;
use App\Http\Requests\ProjectUpdateFormRequest;
use App\Models\Project;
use Exception;
use Illuminate\Support\Facades\Log;

class ProjectController extends BaseCrudController
{
    protected function getModelClass(): string { return Project::class; }
    protected function getResourceClass(): string { return ProjectResource::class; }
    protected function getIndexView(): string { return 'Projects/Project'; }
    protected function getFormView(): string { return 'Projects/ProjectForm'; }
    protected function getIndexRoute(): string { return 'project.index'; }
    protected function getSearchableFields(): array { return ['title', 'description', 'image_name']; }
    protected function getStorageFolder(): string { return 'projects'; }
    protected function getFormRequestClass(string $type): string { return $type === 'create' ? ProjectCreateFormRequest::class : ProjectUpdateFormRequest::class; }
    protected function getFileRequestInputName(): string { return 'image'; }
    protected function getFileHashNameAttribute(): string { return 'image_hash_name'; }
    protected function getFileUrlAttribute(): string { return 'image_url'; }
    protected function getFileNameAttribute(): string { return 'image_name'; }
}
