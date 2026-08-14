<script setup lang="ts">
import SidebarNavLinks from '@/Components/sidebar/SidebarNavLinks.vue';
import SidebarToggler from '@/Components/sidebar/SidebarToggler.vue';
import { useSidebarStore } from '@/stores/sidebarStore';
import type { NavItemProps } from '@/types/general';
import { PanelLeft } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify';

interface Props {
    sidebarOpenWidth: number,
    sidebarRailWidth: number,
    navItems: NavItemProps[],
}

const { sidebarOpenWidth, sidebarRailWidth, navItems } = defineProps<Props>()

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const { mdAndUp, lgAndUp, lgAndDown } = useDisplay()
const { toggleSidebar } = sidebarStore;
</script>

<template>
    <v-navigation-drawer v-if="mdAndUp && !lgAndUp" location="left" temporary :width="sidebarOpenWidth" v-model="isOpen"
        class="bg-secondary flex! flex-col justify-between!">
        <v-list density="compact" nav class="h-full flex flex-col justify-between">
            <SidebarNavLinks :nav-items="navItems" />
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-if="lgAndUp" permanent :rail="!isOpen" :width="sidebarOpenWidth"
        :rail-width="sidebarRailWidth" class="bg-secondary flex! flex-col justify-between!">
        <v-list density="compact" nav class="h-full flex flex-col justify-between">
            <SidebarNavLinks :nav-items="navItems" />

            <SidebarToggler />
        </v-list>
    </v-navigation-drawer>
</template>