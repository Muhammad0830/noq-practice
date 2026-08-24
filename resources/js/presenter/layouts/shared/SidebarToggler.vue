<script setup lang="ts">
import { useSidebarStore } from '@/presenter/stores/sidebarStore';
import { PanelLeft } from '@lucide/vue';
import { storeToRefs } from 'pinia';

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const { toggleSidebar } = sidebarStore;
</script>

<template>
    <v-list-item @click="toggleSidebar" :ripple="false" :prepend-icon="PanelLeft" title="Sidebar Toggle"
        class="hover:bg-primary/70! cursor-pointer transition-padding duration-200"
        :class="[isOpen ? 'px-2' : 'px-4.5!']"></v-list-item>
</template>