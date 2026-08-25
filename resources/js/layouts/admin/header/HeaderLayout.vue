<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebarStore.js';
import { router, usePage } from '@inertiajs/vue3';
import { Menu, PanelLeft } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
import HeeaderNavMenu from './HeeaderNavMenu.vue';
import { logout } from '@/routes/index.js';
import ThemeToggler from '../../Shared/ThemeToggler.vue';
import HeaderProfileMenu from '../../Shared/HeaderProfileMenu.vue';
import HeaderDialog from '../../Shared/HeaderDialog.vue';

interface HeaderLayoutProps {
    sidebarOpenWidth: number,
    sidebarRailWidth: number,
    shop_id: number,
}
const { sidebarOpenWidth, sidebarRailWidth, shop_id } = defineProps<HeaderLayoutProps>()

const { lgAndUp, mdAndUp, mdAndDown } = useDisplay()

const page = usePage();
const user = computed(() => page.props.auth.user);

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);
const { toggleSidebar } = sidebarStore;

const isModalOpen = ref(false);
const isMenuOpen = ref(false);

function handleToggle() {
    if (mdAndUp.value) toggleSidebar()
    else isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
    <v-app-bar class="bg-secondary flex">
        <!-- logo -->
        <div class="h-full bg-appPrimary! lg:border-r flex items-center lg:justify-center text-2xl text-primary max-lg:pl-4 font-bold transition-w duration-300"
            :style="{ width: `${!isOpen && lgAndUp ? sidebarRailWidth : sidebarOpenWidth}px`, fontSize: `${!isOpen && lgAndUp ? '20px' : '24px'}` }">
            NoQ
        </div>

        <div class="flex items-center gap-4 justify-between flex-1 px-4">
            <!-- sidebar toggler-->
            <v-btn v-if="lgAndUp" @click="toggleSidebar" variant="flat" color="background" class="text-primary"
                :icon="PanelLeft" rounded density="comfortable"></v-btn>

            <!-- user name -->
            <span>{{ user?.name || 'Unknown' }}</span>

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
    <HeeaderNavMenu :shop_id="shop_id" v-model="isMenuOpen" />
</template>