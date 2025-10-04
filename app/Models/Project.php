<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        "title",
        "description",
        "link",
        "github_link",
        "image_url",
        "image_name",
        "image_hash_name",
    ];
}
