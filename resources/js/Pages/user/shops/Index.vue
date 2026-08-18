<script setup lang="ts">
import { Shop } from '@/core/types/Shop';

const { data } = defineProps<{ data: Shop[] }>()
</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl font-bold">Shops List</div>

        <div class="flex flex-col gap-2 mt-4">
            <div v-for="shop in data" :key="shop.id" class="flex gap-4 p-2 border rounded w-full">
                <div class="w-[300px] truncate">{{ shop.name }}</div>
                <div class="flex-1 truncate text-nowrap">{{ shop.description }}</div>
            </div>
        </div>
    </div>
</template>