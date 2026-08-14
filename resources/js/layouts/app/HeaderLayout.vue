<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebarStore';
import { router } from '@inertiajs/vue3';
import { Menu, PanelLeft } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { logout } from '@/actions/App/Http/Controllers/AuthController';
import { ref } from 'vue';
import HeaderDialog from '@/Components/header/HeaderDialog.vue';
import HeaderProfileMenu from '@/Components/header/HeaderProfileMenu.vue';
import ThemeToggler from '@/Components/header/ThemeToggler.vue';
import { useDisplay } from 'vuetify';
import { NavItemProps } from '@/types/general';
import HeeaderNavMenu from '@/Components/header/HeeaderNavMenu.vue';

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const { toggleSidebar } = sidebarStore;
const isModalOpen = ref(false);
const isMenuOpen = ref(false);

const { sidebarOpenWidth, sidebarRailWidth, navItems } = defineProps<{
    sidebarOpenWidth: number,
    sidebarRailWidth: number,
    navItems: NavItemProps[],
}>()

const { lgAndUp, mdAndUp, mdAndDown } = useDisplay()

function handleToggle() {
    if (mdAndUp.value) toggleSidebar()
    else isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
    <v-app-bar class="bg-secondary flex">
        <!-- logo -->
        <div class="h-full lg:border-r flex items-center lg:justify-center text-2xl text-primary max-lg:pl-4 font-bold transition-w duration-300"
            :style="{ width: `${!isOpen && lgAndUp ? sidebarRailWidth : sidebarOpenWidth}px`, fontSize: `${!isOpen && lgAndUp ? '20px' : '24px'}` }">
            NoQ
        </div>

        <div class="flex items-center gap-4 justify-between flex-1 px-4">
            <!-- sidebar toggler-->
            <v-btn v-if="lgAndUp" @click="toggleSidebar" variant="flat" color="background" class="text-primary"
                :icon="PanelLeft" rounded density="comfortable"></v-btn>

            <div class="flex items-center gap-4 max-lg:flex-1 max-lg:justify-end">
                <!-- menu toggler -->
                <v-btn v-if="mdAndDown" @click="handleToggle" :icon="Menu" rounded="xl" variant="outlined"
                    density="comfortable"></v-btn>

                <!-- dark & light mode toggler -->
                <ThemeToggler />

                <!-- profile menu/dropdown -->
                <HeaderProfileMenu @open-modal="() => isModalOpen = true" />
            </div>
        </div>
    </v-app-bar>

    <!-- logout dialog -->
    <HeaderDialog v-model="isModalOpen" @logout="() => router.post(logout())" />

    <!-- mobile navLinks menu -->
    <HeeaderNavMenu v-model="isMenuOpen" :nav-items="navItems" />
</template>