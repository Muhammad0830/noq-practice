<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceEditRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id' => ['required'],
            'shop_id' => ['required'],
            'name' => ['required', 'string', 'max:255'],
            'duration_min' => ['required', 'integer', 'min:1'],
            'price' => ['required', 'numeric', 'min:1'],
            'buffer_time' => ['nullable', 'integer', 'min:0'],
            'description' => ['nullable', 'string'],
            'is_active' => ['nullable', 'boolean'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Name is required',
            'name.string' => 'Invalid name value',
            'name.max' => 'Maximum 255 characters',
            'duration_min.required' => 'Duration is required',
            'duration_min.numeric' => 'Invalid duration value',
            'price.required' => 'Price is required',
            'price.numeric' => 'Invalid price value',
            'buffer_time.integer' => 'Invalid buffer time value',
            'description.string' => 'Invalid description value'
        ];
    }
}