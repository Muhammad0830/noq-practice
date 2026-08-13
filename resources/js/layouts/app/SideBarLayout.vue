<script setup lang="ts">
import { dashboard, settings, shopsList, test } from '@/routes';
import { Link } from '@inertiajs/vue3';
import { LayoutDashboard, ListTodo, Settings, Store } from '@lucide/vue';
import { ref } from 'vue';

const isOpen = ref(true)

const navItems = [
    {
        id: 0,
        label: 'Dashboard',
        route: dashboard(),
        icon: LayoutDashboard,
    },
    {
        id: 1,
        label: 'Shops',
        route: shopsList(),
        icon: Store,
    },
    {
        id: 2,
        label: 'Settings',
        route: settings(),
        icon: Settings,
    },
    {
        id: 3,
        label: 'TestPage',
        route: test(),
        icon: ListTodo,
    }
]
</script>

<template>
    <div class="w-65 h-screen bg-primary">
        <v-list class="flex flex-col bg-transparent">
            <Link v-for="item in navItems" :href="item.route" :key="item.id">
                <v-list-item :value="item.id" :ripple="false" color="white">
                    {{ item.label }}
                </v-list-item>
            </Link>
        </v-list>
    </div>
</template>