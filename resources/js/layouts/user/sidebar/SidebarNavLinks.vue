<script setup lang="ts">
import { userNavItems } from '@/layouts/navItems.js';
import { useSidebarStore } from '@/stores/sidebarStore.js';
import { adminDashboard } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { UserShield } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import ShopChooseDialog from './ShopChooseDialog.vue';

const page = usePage();
const isAdmin = computed(() => page.props.auth.isAdmin);
const user = computed(() => page.props.auth.user);

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);

const isDialogOpen = ref(false);
</script>

<template>
    <div class="flex flex-col gap-1">
        <Link v-for="item in userNavItems" :href="item.route" :key="item.id">
            <v-list-item :prepend-icon="item.icon" :title="item.label"
                class="hover:bg-primary/70! transition-padding duration-200"
                :class="[{ 'bg-primary/70!': page.url.startsWith(item.url) }, isOpen ? 'px-2' : 'px-4.5!', 'gap-0!']"></v-list-item>
        </Link>

        <Link v-if="isAdmin && user?.admin.shops.length === 1"
            :href="adminDashboard({ shop: user?.admin.shops[0].id })">
            <v-list-item :prepend-icon="UserShield" title="Admin Panel"
                class="hover:bg-primary/70! transition-padding duration-200"
                :class="[isOpen ? 'px-2' : 'px-4.5!', 'gap-0!']"></v-list-item>
        </Link>
        <v-list-item v-else-if="isAdmin" :prepend-icon="UserShield" @click="() => isDialogOpen = true"
            title="Admin Panel" class="hover:bg-primary/70! transition-padding duration-200"
            :class="[isOpen ? 'px-2' : 'px-4.5!', 'gap-0!']"></v-list-item>

        <ShopChooseDialog v-model="isDialogOpen" />
    </div>
</template>