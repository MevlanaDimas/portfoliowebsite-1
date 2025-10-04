<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseCrudController;
use App\Http\Resources\AboutResource;
use App\Http\Requests\AboutCreateFormRequest;
use App\Http\Requests\AboutUpdateFormRequest;
use App\Models\About;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class AboutController extends BaseCrudController
{
    protected function getModelClass(): string { return About::class; }
    protected function getResourceClass(): string { return AboutResource::class; }
    protected function getIndexView(): string { return 'Abouts/About'; }
    protected function getFormView(): string { return 'Abouts/AboutForm'; }
    protected function getIndexRoute(): string { return 'about.index'; }
    protected function getSearchableFields(): array { return ['bio', 'photo_name']; }
    protected function getStorageFolder(): string { return 'photos'; }
    protected function getFormRequestClass(string $type): string { return $type === 'create' ? AboutCreateFormRequest::class : AboutUpdateFormRequest::class; }
    protected function getFileRequestInputName(): string { return 'photo'; }
    protected function getFileHashNameAttribute(): string { return 'photo_hash_name'; }
    protected function getFileUrlAttribute(): string { return 'photo_url'; }
    protected function getFileNameAttribute(): string { return 'photo_name'; }


    public function activatingAbout($id){
        try{
            DB::transaction(function () use ($id) {
                About::where('activate', true)->update([
                    'activate' => false
                ]);
    
                $about = About::findOrFail($id);
                $about->activate = true;
                $about->save();
            });

            return redirect()->back()->with('success', 'About successfully activated.');
        } 
        catch (Exception $e){
            Log::error('Activating about failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while activating the about. Please try again.');
        }
    }
}