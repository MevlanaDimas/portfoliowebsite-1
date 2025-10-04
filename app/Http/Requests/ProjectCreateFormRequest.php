<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectCreateFormRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'image' => 'required|image|mimes:png,jpg,jpeg',
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
            'title.required' => 'The title is required',
            'title.string' => 'The title must be a string',
            'title.max' => 'The title must not be greater than 255 characters',
            'description.required' => 'The description is required',
            'description.string' => 'The description must be a string',
            'link.url' => 'The link must be a valid URL',
            'github_link.url' => 'The GitHub link must be a valid URL',
            'image.required' => 'The image is required',
            'image.image' => 'The image must be image file',
            'image.mimes' => 'The image must be a file of type: png, jpg, jpeg'
        ];
    }
}
