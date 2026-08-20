<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateShopRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

        $rules = [
            // Definition Validation 
            'definition.name' => ['required', 'string', 'max:255'],
            'definition.category' => ['required', 'integer', 'min:1'],
            'definition.description' => ['nullable', 'string'],
            'definition.address' => ['required', 'string'],
            'definition.phone' => ['required', 'string'],

            // Services Validation
            'services' => ['required', 'array', 'min:1'],
            'services.*.name' => ['required', 'string', 'max:255'],
            'services.*.durationMin' => ['required', 'integer', 'min:1'],
            'services.*.price' => ['required', 'numeric', 'min:1'],
            'services.*.bufferTime' => ['nullable', 'integer', 'min:0'],
            'services.*.description' => ['nullable', 'string'],
        ];

        // Scheduling Validation per Day
        foreach ($days as $day) {
            $rules["scheduling.{$day}.isOpen"] = ['required', 'boolean'];
            $rules["scheduling.{$day}.items"] = ['required', 'array'];
            $rules["scheduling.{$day}.items.*.id"] = ['required', 'string', 'uuid'];
            $rules["scheduling.{$day}.items.*.dayOfWeek"] = ['required', 'string', Rule::in($days)];
            $rules["scheduling.{$day}.items.*.startTime"] = ['required', 'string', 'date_format:H:i'];
            $rules["scheduling.{$day}.items.*.endTime"] = ['required', 'string', 'date_format:H:i'];
            $rules["scheduling.{$day}.items.*.type"] = ['required', 'string', Rule::in(['open', 'closed'])];
        }

        return $rules;
    }
}