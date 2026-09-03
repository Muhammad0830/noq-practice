<script setup lang="ts">
import { adminNavItems } from '@/layouts/navItems';
import { useSidebarStore } from '@/stores/sidebarStore';
import { dashboard } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { User } from '@lucide/vue';
import { storeToRefs } from 'pinia';

const { shopId } = defineProps<{ shopId: number }>()

const sidebarStore = useSidebarStore();
const { isOpen } = storeToRefs(sidebarStore);

const page = usePage();
</script>

<template>
  <div class="flex flex-col gap-1">
    <Link
      v-for="item in adminNavItems"
      :key="item.id"
      :href="item.route(shopId)"
    >
      <v-list-item
        :prepend-icon="item.icon"
        :title="item.label"
        class="hover:bg-primary/70! transition-padding duration-200"
        :class="[{ 'bg-primary/70!': page.url.includes(item.url) }, isOpen ? 'px-2' : 'px-4.5!', 'gap-0!']"
      />
    </Link>

    <Link :href="dashboard()">
      <v-list-item
        :prepend-icon="User"
        title="User Panel"
        class="hover:bg-primary/70! transition-padding duration-200"
        :class="[isOpen ? 'px-2' : 'px-4.5!', 'gap-0!']"
      />
    </Link>
  </div>
</template>