<script setup lang="ts">
import { dialogDesktopWidth, dialogMobileWidth } from '@/constants/constants';
import { adminDashboard } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const page = usePage();
const user = computed(() => page.props.auth.user);

const isDialogOpen = defineModel<boolean>({ required: true })
const { xs } = useDisplay();
</script>

<template>
  <v-dialog
    v-model="isDialogOpen"
    :max-width="xs ? dialogMobileWidth : dialogDesktopWidth"
  >
    <template #default="{ isActive }">
      <v-card
        title="Choose a Shop Panel to move to"
        class="bg-secondary pb-4 flex flex-col items-center gap-1"
      >
        <Link
          v-for="shop in user?.admin.shops"
          :key="shop.id"
          :href="adminDashboard({ shop: shop.id })"
          class="w-4/5 max-auto"
        >
          <v-btn
            class="w-full"
            variant="text"
            color="primary"
            size="x-large"
            density="comfortable"
            :text="`${shop.name} Panel`"
            @click="() => isActive.value = false"
          />
        </Link>
      </v-card>
    </template>
  </v-dialog>
</template>