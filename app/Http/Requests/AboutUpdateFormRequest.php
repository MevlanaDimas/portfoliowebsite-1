<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AboutUpdateFormRequest extends FormRequest
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
            'bio' => 'nullable|string',
            'photo' => 'nullable|image|mimes:png,jpg,jpeg',
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
            'bio.string' => 'The bio must be a string',
            'photo.image' => 'The photo must be image file',
            'photo.mimes' => 'The photo must be a file of type: png, jpg, jpeg'
        ];
    }
}
