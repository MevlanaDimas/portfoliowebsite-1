<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('registration screen can be rendered', function () {
    $response = $this->get(route('register'));

    $response->assertStatus(200);
});

test('a new user can register when no users exist', function () {
    $response = $this->post(route('register.store'), [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('a second user cannot register', function () {
    // Create the first user, which should be allowed.
    User::factory()->create();

    // Attempt to register a second user.
    $response = $this->post(route('register.store'), [
        'name' => 'Second User',
        'email' => 'test2@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertRedirect()->assertSessionHas('error', "Sorry you can't register. The registration limit has been reached.");
    $this->assertGuest();
    expect(User::count())->toBe(1);
});