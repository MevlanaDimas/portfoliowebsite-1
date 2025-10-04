<?php

namespace App\Observers\Concerns;

use App\Models\User;
use App\Notifications\TableUpdated;

trait NotifiesOnUpdate
{
    private function sendNotification(string $title, string $description): void
    {
        // Get the user ID from a config file instead of hardcoding it.
        $userId = config('portfolio.notify_user_id');

        if ($userId && $user = User::find($userId)) {
            $user->notify(new TableUpdated($title, $description));
        }
    }
}