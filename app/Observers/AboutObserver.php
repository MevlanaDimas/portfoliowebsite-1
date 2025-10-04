<?php

namespace App\Observers;

use App\Observers\Concerns\NotifiesOnUpdate;
use App\Models\About;
use Illuminate\Support\Facades\Cache;

class AboutObserver
{
    use NotifiesOnUpdate;

    public function created(About $about): void
    {
        Cache::forget('home.data');
        $this->sendNotification('About Section Updated', 'A new "About" entry has been created.');
    }

    public function updated(About $about): void
    {
        Cache::forget('home.data');
        $this->sendNotification('About Section Updated', 'An "About" entry has been updated.');
    }

    public function deleted(About $about): void
    {
        Cache::forget('home.data');
        $this->sendNotification('About Section Updated', 'An "About" entry has been deleted.');
    }

    public function restored(About $about): void
    {
        Cache::forget('home.data');
        $this->sendNotification('About Section Updated', 'An "About" entry has been restored.');
    }
}
