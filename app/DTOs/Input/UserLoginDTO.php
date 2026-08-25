<?php

namespace App\DTOs\Input;

class UserLoginDTO
{
    public function __construct(
        public readonly string $email,
        public readonly string $password,
    ) {
    }
}