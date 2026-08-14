<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebarStore';
import { NavItemProps } from '@/types/general';
import { Link, usePage } from '@inertiajs/vue3';
import { storeToRefs } from 'pinia';

const { navItems } = defineProps<{ navItems: NavItemProps[] }>()

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const page = usePage();
</script>

<template>
    <div class="flex flex-col gap-1">
        <Link v-for="item in navItems" :href="item.route" :key="item.id">
            <v-list-item :prepend-icon="item.icon" :title="item.label"
                class="hover:bg-primary/70! transition-padding duration-200"
                :class="[{ 'bg-primary/70!': page.url.startsWith(item.url) }, isOpen ? 'px-2' : 'px-4.5!', 'gap-0!']"></v-list-item>
        </Link>
    </div>
</template>