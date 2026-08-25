<?php

namespace App\DTOs\Input;

class ShopCreateDTO
{
    /**
     * @param ServiceDTO[] $servicesDTO
     */
    public function __construct(
        public readonly ShopDefinitionDTO $definitionDTO,
        public readonly SchedulingDTO $schedulingDTO,
        public readonly array $servicesDTO,
    ) {
    }

    public static function fromRequest(array $validated): self
    {
        $services = array_map(
            fn(array $service) => ServiceDTO::fromArray($service),
            $validated['services'] ?? []
        );

        return new self(
            definitionDTO: ShopDefinitionDTO::fromArray($validated['definition']),
            schedulingDTO: SchedulingDTO::fromArray($validated['scheduling']),
            servicesDTO: $services,
        );
    }
}