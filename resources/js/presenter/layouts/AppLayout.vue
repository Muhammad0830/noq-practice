<script setup lang="ts">
import HeaderLayout from './app/header/HeaderLayout.vue';
import SideBarLayout from './app/sidebar/SideBarLayout.vue';

const sidebarOpenWidth = 250;
const sidebarRailWidth = 80;
</script>

<template>
    <v-layout>
        <HeaderLayout :sidebar-open-width="sidebarOpenWidth" :sidebar-rail-width="sidebarRailWidth" />
        <div class="flex flex-1">
            <SideBarLayout :sidebar-open-width="sidebarOpenWidth" :sidebar-rail-width="sidebarRailWidth" />
            <v-main class="h-screen overflow-y-scroll overflow-x-hidden flex-1">
                <div class="lg:p-8 md:6 p-4 max-w-250 mx-auto">
                    <slot></slot>
                </div>
            </v-main>
        </div>
    </v-layout>
</template>