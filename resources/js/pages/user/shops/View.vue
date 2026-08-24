<script setup lang="ts">
import { Shop } from '@/types/Shop';
import { shopsList } from '@/routes';
import { formatDate } from '@/utils/formatDate';
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

    <div class="flex flex-col gap-2 mt-6">
        <div class="text-lg flex items-center gap-2">
            <span class="font-bold">Name:</span>
            <span>{{ shop.name }}</span>
        </div>

        <div class="flex items-center gap-2">
            <span class="font-bold">Description:</span>
            <span>{{ shop.description }}</span>
        </div>
    </div>

    <div v-if="shop && shop.services.length === 0"
        class="border p-4 min-h-20 rounded flex items-center justify-center text-lg font-bold mt-6">
        This shop has no services yet.
    </div>

    <div class="flex flex-col gap-2 mt-6">
        <div v-for="service in shop.services" class="flex items-center gap-4 justify-between border p-4 rounded">
            <div class="flex-1 flex flex-col gap-2">
                <span class="w-full truncate">{{ service.name }}</span>
                <span class="w-full truncate">{{ service.description }}</span>
            </div>

            <div class="flex flex-col gap-2">
                <div class="text-sm flex items-center gap-2 justify-end">
                    <span>Created at:</span>
                    <span class="font-semibold">{{ formatDate(service.created_at) }}</span>
                </div>
                <div class="text-sm flex items-center gap-2 justify-end">
                    <span>Updated at:</span>
                    <span class="font-semibold">{{ formatDate(service.updated_at) }}</span>
                </div>
            </div>
        </div>
    </div>

</template>