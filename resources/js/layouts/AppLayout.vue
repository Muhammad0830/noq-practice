<script setup lang="ts">
import { dashboard, settings, shopsList, test } from '@/routes/index.js';
import HeaderLayout from './app/HeaderLayout.vue';
import SideBarLayout from './app/SideBarLayout.vue';
import { LayoutDashboard, ListTodo, Settings, Store } from '@lucide/vue';
import { useDisplay } from 'vuetify'

const sidebarOpenWidth = 250;
const sidebarRailWidth = 80;
const { mdAndUp } = useDisplay()

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
        label: 'Settings',
        route: settings(),
        url: '/settings',
        icon: Settings,
    },
    {
        id: 3,
        label: 'TestPage',
        route: test(),
        url: '/test',
        icon: ListTodo,
    }
]

</script>

<template>
    <v-layout>
        <HeaderLayout :nav-items="navItems" :sidebar-open-width="sidebarOpenWidth"
            :sidebar-rail-width="sidebarRailWidth" />
        <div>
            <SideBarLayout :nav-items="navItems" :sidebar-open-width="sidebarOpenWidth"
                :sidebar-rail-width="sidebarRailWidth" />
            <v-main class="h-screen overflow-y-scroll overflow-x-hidden flex-1">
                <slot />
            </v-main>
        </div>
    </v-layout>
</template>