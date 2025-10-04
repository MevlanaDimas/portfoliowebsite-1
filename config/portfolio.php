<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Portfolio Owner Information
    |--------------------------------------------------------------------------
    */
    'owner' => [
        'email' => env('PORTFOLIO_OWNER_EMAIL', 'maulana.arby10@gmail.com'),
        'name' => env('PORTFOLIO_OWNER_NAME', 'Dimas Maulana'),
    ],

    /*
    | The ID of the user who should receive notifications for content updates.
    */
    'notify_user_id' => env('PORTFOLIO_NOTIFY_USER_ID', 1),

    'max_users' => (int) env('PORTFOLIO_MAX_USERS', 1),
];
