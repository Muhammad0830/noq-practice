<script setup lang="ts">
import { userNavItems } from '@/layouts/navItems';
import { Link, usePage } from '@inertiajs/vue3';
import { X } from '@lucide/vue';

const isMenuOpen = defineModel<boolean>();
const page = usePage();
</script>

<template>
    <v-overlay v-model="isMenuOpen" v-slot:default="{ isActive }" temporary persistent class="z-9999">
        <div class="relative w-screen h-screen flex items-center justify-center bg-background">

            <div class="flex flex-col gap-2">
                <Link v-for="item in userNavItems" :href="item.route" :key="item.id" @click="() => isActive.value = false">
                    <v-list-item min-width="250px" class="min-h-12! text-headline-small hover:bg-foreground/20!"
                        :class="{ 'bg-foreground/20!': page.url.startsWith(item.url) }">
                        <span class="text-center w-full inline-block">{{ item.label }}</span>
                    </v-list-item>
                </Link>
            </div>

            <!-- x/close button -->
            <v-btn @click="() => isActive.value = false" class="absolute! top-10 right-10" variant="outlined"
                color="foreground" size="x-large" density="compact" :icon="X"></v-btn>
        </div>
    </v-overlay>
</template>