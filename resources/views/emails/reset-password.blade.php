<x-mail::message>
<div style="text-align: center; margin-bottom: 20px;">
    <img src="{{ $message->embed(public_path('dm-logo-design_705304-850-removebg-preview.svg')) }}" alt="{{ config('app.name') }} Logo" width="100">
</div>

# Reset Password Notification

You are receiving this email because we received a password reset request for your account.

<x-mail::button :url="str_replace('?email=', '?email=' . urlencode($user->email), $url)">
Reset Password
</x-mail::button>

This password reset link will expire in {{ config('auth.passwords.'.config('auth.defaults.passwords').'.expire') }} minutes.

If you did not request a password reset, no further action is required.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
