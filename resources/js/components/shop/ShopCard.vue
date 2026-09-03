<script setup lang="ts">
import { shopView } from '@/routes';
import { Shop } from '@/types/Shop';
import { Link } from '@inertiajs/vue3';
import { Heart, MessageCircle } from '@lucide/vue';

const { shop } = defineProps<{ shop: Shop }>()

function addToFavourites() {

}
</script>

<template>
  <div class="relative group cursor-default overflow-hidden hover:scale-101 bg-secondary transition-all duration-100">
    <Link :href="shopView({ shop: shop.id })">
      <div class="flex flex-col gap-2 p-2 border rounded w-full group-hover:bg-primary/5">
        <div class="w-full aspect-square rounded border" />

        <div class="w-full truncate text-lg font-bold">
          {{ shop.name }}
        </div>

        <div class="w-full truncate text-nowrap text-foreground/80">
          {{ shop.description }}
        </div>
      </div>
    </Link>

    <v-btn
      class="group-hover:top-0 transition-all! duration-200 absolute! -top-18 right-0 scale-60 hover:bg-primary! hover:text-white!"
      variant="tonal"
      color="primary"
      :icon="Heart"
      @click="() => addToFavourites()"
    />

    <v-btn
      class="group-hover:top-8 transition-all! delay-75 duration-200 absolute! -top-10 right-0 scale-60 hover:bg-primary! hover:text-white!"
      variant="tonal"
      color="primary"
      :icon="MessageCircle"
      @click="() => addToFavourites()"
    />
  </div>
</template>