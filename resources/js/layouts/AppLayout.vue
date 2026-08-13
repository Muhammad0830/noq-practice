<script setup lang="ts">
import SideBarLayout from './app/SideBarLayout.vue';


</script>

<template>
    <v-app>
        <div class="flex">
            <SideBarLayout />
            <div class="overflow-y-scroll overflow-x-hidden flex-1 h-screen">
                <slot />
            </div>
        </div>
    </v-app>
</template>