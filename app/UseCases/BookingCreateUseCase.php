<?php

namespace App\UseCases;

use App\Contracts\Services\BookingServiceContract;
use App\Contracts\UseCases\BookingCreateUseCaseContract;
use App\DTOs\Input\BookingCreateDTO;
use App\Models\Service;

class BookingCreateUseCase implements BookingCreateUseCaseContract 
{
    public function __construct(
        private BookingServiceContract $bookingService,
    ){}

    public function execute(BookingCreateDTO $dto, Service $service, int $user_id): void
    {
        $this->bookingService->create($dto, $service, $user_id);
    }
}