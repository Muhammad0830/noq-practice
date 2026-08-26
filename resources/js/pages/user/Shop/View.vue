<script setup lang="ts">
import { Shop } from '@/types/Shop';
import { bookPage, shopsList } from '@/routes';
import { Link } from '@inertiajs/vue3';
import { Undo2 } from '@lucide/vue';

const { data: shop } = defineProps<{ data: Shop }>()
</script>

<template>
    <div class="flex gap-4 items-center justify-between">
        <div class="text-xl font-bold">Shop View</div>
        <Link :href="shopsList()">
            <v-btn variant="tonal" :prepend-icon="Undo2">Go Back</v-btn>
        </Link>
    </div>

    <div v-if="!shop" class="p-4 rounded border min-h-20 w-full flex items-center justify-center">
        No Result has been found
    </div>

    <div class="flex flex-col gap-2 mt-6 p-4 rounded-lg border">
        <div class="text-lg flex items-center gap-2">
            <span class="font-bold">Name:</span>
            <span>{{ shop.name }}</span>
        </div>

        <div class="flex items-center gap-2">
            <span class="font-bold">Description:</span>
            <span>{{ shop.description ?? 'UNKNOWN' }}</span>
        </div>
    </div>

    <div v-if="shop && shop.services.length === 0"
        class="border p-4 min-h-20 rounded flex items-center justify-center text-lg font-bold mt-6">
        This shop has no services yet.
    </div>

    <div v-else class="flex flex-col gap-2 mt-6">
        <h5 class="text-lg font-bold">Services</h5>
        <v-card v-for="service in shop.services" :key="service.id" color="transparent">
            <div class="flex items-center gap-4 justify-between border p-4 rounded">
                <div class="w-20 aspect-square rounded-md border"></div>

                <div class="min-w-0 flex-1 flex flex-col gap-2">
                    <span class="text-lg w-full truncate">{{ service.name }}</span>
                    <span class="w-full text-foreground/90 truncate">{{ service.duration_min }} min</span>
                </div>

                <div class="flex-1">
                    <span class="text-xl text-primary">${{ service.price }}</span>
                </div>

                <Link :href="bookPage({ shop: shop.id, service: service.id })" class="flex flex-col gap-2">
                    <v-btn variant="flat" color="primary" class="text-white! font-semibold!">Book</v-btn>
                </Link>
            </div>
        </v-card>
    </div>

</template>