<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import AdminLayout from './Admin/AdminLayout.vue';
import UserLayout from './User/UserLayout.vue';
import { computed } from 'vue';

const page = usePage();
const adminPanel = computed(() => page.url.startsWith('/admin/'))
const isAdmin = computed(() => page.props.auth.isAdmin)
</script>

<template>
    <v-layout>
        <AdminLayout v-if="adminPanel && isAdmin">
            <slot />
        </AdminLayout>
        <UserLayout v-else>
            <slot />
        </UserLayout>
    </v-layout>
</template>
