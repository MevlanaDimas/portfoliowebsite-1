<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    protected $fillable = [
        "photo_url",
        "photo_name",
        "photo_hash_name",
        'bio',
        'activate'
    ];

    protected $casts = [
        'activate' => 'boolean',
    ];
}
