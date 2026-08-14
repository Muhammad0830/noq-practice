<script setup lang="ts">
import { dashboard, favourites, servcies, shopsList, todo } from '@/routes/index.js';
import HeaderLayout from './app/HeaderLayout.vue';
import SideBarLayout from './app/SideBarLayout.vue';
import { CircleCheckBig, Heart, LayoutDashboard, LayoutList, Store } from '@lucide/vue';

const sidebarOpenWidth = 250;
const sidebarRailWidth = 80;

const navItems = [
    {
        id: 0,
        label: 'Dashboard',
        route: dashboard(),
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        id: 1,
        label: 'Shops',
        route: shopsList(),
        url: '/shops',
        icon: Store,
    },
    {
        id: 2,
        label: 'Services',
        route: servcies(),
        url: '/services',
        icon: LayoutList,
    },
    {
        id: 3,
        label: 'Favourites',
        route: favourites(),
        url: '/favourites',
        icon: Heart,
    },
    {
        id: 4,
        label: 'Todo',
        route: todo(),
        url: '/todo',
        icon: CircleCheckBig,
    }
]

</script>

<template>
    <v-layout>
        <HeaderLayout :nav-items="navItems" :sidebar-open-width="sidebarOpenWidth"
            :sidebar-rail-width="sidebarRailWidth" />
        <div class="flex flex-1">
            <SideBarLayout :nav-items="navItems" :sidebar-open-width="sidebarOpenWidth"
                :sidebar-rail-width="sidebarRailWidth" />
            <v-main class="h-screen overflow-y-scroll overflow-x-hidden flex-1">
                <div class="lg:p-8 md:6 p-4">
                    <slot />
                </div>
            </v-main>
        </div>
    </v-layout>
</template>