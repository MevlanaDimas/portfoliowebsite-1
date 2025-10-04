<?php

namespace Database\Seeders;

use App\Models\About;
use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([

            User::factory()->create([
                'name' => 'Dimas',
                'email' => 'dimas@dev.com',
                'password' => '1234512345'
            ]),
            
            // About::factory()->create([
            //     'photo_url' => 'photos/MlxnpsaJrkYrKWFGeTRhzApOHzUePgWVawqWmI6a.png',
            //     'photo_name' => 'Ini cuman coba',
            //     'photo_hash_name' => 'MlxnpsaJrkYrKWFGeTRhzApOHzUePgWVawqWmI6a',
            //     'bio' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias sed consequatur quis assumenda amet repellat deserunt quam tenetur nemo aliquam, repudiandae animi! Alias non ipsam doloribus quaerat maxime obcaecati!',
            //     'activate' => true
            // ]),

            // Project::factory()->create([
            //     'title' => 'Coba',
            //     'description' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias sed consequatur quis assumenda amet repellat deserunt quam tenetur nemo aliquam, repudiandae animi! Alias non ipsam doloribus quaerat maxime obcaecati!',
            //     'link' => 'http://example.com',
            //     'github_link' => 'http://github.com/MevlanaDimas',
            //     'image_url' => 'projects/10A4Ckko8EcJBQ9mMwqcrMaT4LAGGz61gf1SWzRV.jpg',
            //     'image_name' => 'Ini cuman coba',
            //     'image_hash_name' => '10A4Ckko8EcJBQ9mMwqcrMaT4LAGGz61gf1SWzRV'
            // ])
        ]);
    }
}
