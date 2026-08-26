<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SchedulingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

        $rules = [];

        foreach ($days as $day) {
            $rules["scheduling.{$day}.isOpen"] = [
                'required',
                'boolean',
            ];

            // Open period
            $rules["scheduling.{$day}.open"] = [
                'required',
                'array',
            ];

            $rules["scheduling.{$day}.open.id"] = [
                'required',
                'int',
            ];

            $rules["scheduling.{$day}.open.shop_id"] = [
                'required',
                'int',
            ];

            $rules["scheduling.{$day}.open.day_of_week"] = [
                'required',
                'string',
                Rule::in([$day]),
            ];

            $rules["scheduling.{$day}.open.start_time"] = [
                'required',
                'string',
                'date_format:H:i',
            ];

            $rules["scheduling.{$day}.open.end_time"] = [
                'required',
                'string',
                'date_format:H:i',
            ];

            $rules["scheduling.{$day}.open.type"] = [
                'required',
                'string',
                Rule::in(['open']),
            ];

            // Closed periods
            $rules["scheduling.{$day}.closed"] = [
                'required',
                'array',
            ];

            $rules["scheduling.{$day}.closed.*.id"] = [
                'required',
                'int',
            ];

            $rules["scheduling.{$day}.closed.*.shop_id"] = [
                'required',
                'int',
            ];

            $rules["scheduling.{$day}.closed.*.day_of_week"] = [
                'required',
                'string',
                Rule::in([$day]),
            ];

            $rules["scheduling.{$day}.closed.*.start_time"] = [
                'required',
                'string',
                'date_format:H:i',
            ];

            $rules["scheduling.{$day}.closed.*.end_time"] = [
                'required',
                'string',
                'date_format:H:i',
            ];

            $rules["scheduling.{$day}.closed.*.type"] = [
                'required',
                'string',
                Rule::in(['closed']),
            ];
        }

        return $rules;
    }
}