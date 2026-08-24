<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import HeaderLayout from './header/HeaderLayout.vue';
import SideBarLayout from './sidebar/SideBarLayout.vue';
import { computed } from 'vue';

const page = usePage();
const shop_id = computed(() => page.props.shop_id);

const sidebarOpenWidth = 250;
const sidebarRailWidth = 80;
</script>

<template>
    <HeaderLayout :shop_id="shop_id" :sidebar-open-width="sidebarOpenWidth" :sidebar-rail-width="sidebarRailWidth" />
    <div class="flex flex-1">
        <SideBarLayout :shop_id="shop_id" :sidebar-open-width="sidebarOpenWidth"
            :sidebar-rail-width="sidebarRailWidth" />
        <v-main class="h-screen overflow-y-scroll overflow-x-hidden flex-1">
            <div class="lg:p-8 md:6 p-4 max-w-250 mx-auto">
                <slot></slot>
            </div>
        </v-main>
    </div>
</template>