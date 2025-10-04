<?php

namespace App\Observers;

use App\Observers\Concerns\NotifiesOnUpdate;
use App\Models\Project;
use Illuminate\Support\Facades\Cache;

class ProjectObserver
{
    use NotifiesOnUpdate;

    /**
     * Handle the Project "created" event.
     */
    public function created(Project $project): void
    {
        Cache::forget('home.data');
        $this->sendNotification(
            'Project Section Updated',
            "A new project titled '{$project->title}' has been created."
        );
    }

    /**
     * Handle the Project "updated" event.
     */
    public function updated(Project $project): void
    {
        Cache::forget('home.data');
        $this->sendNotification(
            'Project Section Updated',
            "The project titled '{$project->title}' has been updated."
        );
    }

    /**
     * Handle the Project "deleted" event.
     */
    public function deleted(Project $project): void
    {
        Cache::forget('home.data');
        $this->sendNotification(
            'Project Section Updated',
            "The project titled '{$project->title}' has been deleted."
        );
    }
}
