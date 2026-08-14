<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Name is required',
            'name.max' => 'Maximum 255 characters.',
            'email.email' => 'Invalid email address',
            'email.required' => 'Email is required',
            'email.max' => 'Maximum 255 characters',
            'passwod.required' => 'Password is required',
            'password.min' => 'Minimum 8 characters required',
            'password.max' => 'Maximum 255 characters',
        ];
    }

}