<script setup lang="ts">
import { Service } from '@/types/Service';


const { data } = defineProps<{ data: Service[] }>()
</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl font-bold">Services List</div>

        <div class="flex flex-col gap-2 mt-4">
            <div v-for="service in data" :key="service.id" class="flex gap-4 p-2 border rounded w-full">
                <div class="w-[300px] truncate">{{ service.name }}</div>
                <div class="flex-1 truncate text-nowrap">{{ service.description }}</div>
            </div>

            <div v-if="data.length === 0"
                class="border p-2 rounded w-full min-h-20 flex items-center justify-center text-lg font-bold">
                No data has been found!
            </div>
        </div>
    </div>
</template>