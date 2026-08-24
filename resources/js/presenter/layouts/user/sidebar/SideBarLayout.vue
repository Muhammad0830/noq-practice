<script setup lang="ts">
import { useSidebarStore } from '@/presenter/stores/sidebarStore';
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify';
import SidebarNavLinks from './SidebarNavLinks.vue';
import SidebarToggler from '../../shared/SidebarToggler.vue';

export interface SidebarLayoutProps {
    sidebarOpenWidth: number,
    sidebarRailWidth: number,
}

const { sidebarOpenWidth, sidebarRailWidth } = defineProps<SidebarLayoutProps>()

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const { mdAndUp, lgAndUp } = useDisplay()
</script>

<template>
    <v-navigation-drawer v-if="mdAndUp && !lgAndUp" location="left" temporary :width="sidebarOpenWidth" v-model="isOpen"
        class="bg-secondary flex! flex-col justify-between!">
        <v-list density="compact" nav class="h-full flex flex-col justify-between">
            <SidebarNavLinks />
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-if="lgAndUp" permanent :rail="!isOpen" :width="sidebarOpenWidth"
        :rail-width="sidebarRailWidth" class="bg-secondary flex! flex-col justify-between!">
        <v-list density="compact" nav class="h-full flex flex-col justify-between">
            <SidebarNavLinks />

            <SidebarToggler />
        </v-list>
    </v-navigation-drawer>
</template>