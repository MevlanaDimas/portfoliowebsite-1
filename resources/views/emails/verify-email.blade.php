<x-mail::message>
<div style="text-align: center; margin-bottom: 20px;">
    <img src="{{ $message->embed(public_path('dm-logo-design_705304-850-removebg-preview.svg')) }}" alt="{{ config('app.name') }} Logo" width="100">
</div>

# Verify Email Address

Please click the button below to verify your email address.

<x-mail::button :url="$url">
Verify Email Address
</x-mail::button>

If you did not create an account, no further action is required.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
