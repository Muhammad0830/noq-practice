<?php

namespace App\Contracts\UseCases;

use App\DTOs\Input\BookingCreateDTO;
use App\Models\Service;

interface BookingCreateUseCaseContract
{
    public function execute(BookingCreateDTO $dto, Service $service, int $user_id): void;
}