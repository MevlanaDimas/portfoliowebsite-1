<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmailMessage extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ];
    }

    /**
     * Function: messages
     * 
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The name is required',
            'name.string' => 'The name must be a string',
            'email.required' => 'The email is required',
            'email.email' => 'The email must be a valid email address',
            'message.required' => 'The message is required',
            'message.string' => 'The message must be a string',
        ];
    }
}
