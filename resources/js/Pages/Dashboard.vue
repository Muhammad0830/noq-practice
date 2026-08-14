<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebarStore';
import { Link } from '@inertiajs/vue3';


const sidebarstore = useSidebarStore();
</script>

<template>
    Dashboard

    <button @click="sidebarstore.toggleSidebar">toggle</button>

</template>