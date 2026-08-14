<script setup lang="ts">
import { NavItemProps } from '@/types/general';
import { Link, usePage } from '@inertiajs/vue3';
import { X } from '@lucide/vue';

const { navItems } = defineProps<{ navItems: NavItemProps[] }>()
const isMenuOpen = defineModel<boolean>();
const page = usePage();
</script>

<template>
    <v-overlay v-model="isMenuOpen" v-slot:default="{ isActive }" temporary persistent class="z-9999">
        <div class="relative w-screen h-screen flex items-center justify-center bg-background">

            <div class="flex flex-col gap-2">
                <Link v-for="item in navItems" :href="item.route" :key="item.id" @click="() => isActive.value = false">
                    <v-list-item min-width="250px" class="min-h-12! text-headline-small hover:bg-foreground/20!"
                        :class="{ 'bg-foreground/20!': page.url.startsWith(item.url) }">
                        <span class="text-center w-full inline-block">{{ item.label }}</span>
                    </v-list-item>
                </Link>
            </div>

            <!-- x/close button -->
            <button @click="() => isActive.value = false"
                class="absolute top-10 right-10 border-1 border-foreground rounded-full p-1">
                <X class="size-10" />
            </button>
        </div>
    </v-overlay>
</template>