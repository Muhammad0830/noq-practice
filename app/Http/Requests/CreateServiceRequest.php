<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'services' => ['required', 'array', 'min:1'],
            'services.*.name' => ['required', 'string', 'max:255'],
            'services.*.duration_min' => ['required', 'numeric', 'min:1'],
            'services.*.price' => ['required', 'numeric', 'min:1'],
            'services.*.buffer_time' => ['nullable', 'integer', 'min:0'],
            'services.*.description' => ['nullable', 'string'],
        ];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'services.min' => 'At least one service required',
            'services.*.name.required' => 'Name is required',
            'services.*.name.string' => 'Invalid name value',
            'services.*.name.max' => 'Maximum 255 characters',
            'services.*.duration_min.required' => 'Duration is required',
            'services.*.duration_min.numeric' => 'Invalid duration value',
            'services.*.price.required' => 'Price is required',
            'services.*.price.numeric' => 'Invalid price value',
            'services.*.buffer_time.integer' => 'Invalid buffer time value',
            'services.*.description.string' => 'Invalid description value'
        ];
    }
}