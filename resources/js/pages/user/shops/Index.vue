<script setup lang="ts">
import ShopCard from '@/components/shop/ShopCard.vue';
import { Shop } from '@/types/Shop';

const { data } = defineProps<{ data: Shop[] }>()
</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl font-bold">Shops List</div>

        <div class="grid grid-cols-4 gap-2 mt-4">
            <ShopCard v-for="shop in data" :key="shop.id" :shop="shop" />
        </div>
    </div>
</template>