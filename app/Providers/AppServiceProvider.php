<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\About;
use App\Models\Project;
use App\Observers\AboutObserver;
use App\Observers\ProjectObserver;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        About::observe(AboutObserver::class);
        Project::observe(ProjectObserver::class);
    }
}
