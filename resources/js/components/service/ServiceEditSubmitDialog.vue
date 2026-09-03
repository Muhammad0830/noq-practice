<script setup lang="ts">
import { dialogDesktopWidth, dialogMobileWidth } from '@/constants/constants';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const page = usePage();
const shop_id = computed<number>(() => page.props.shop_id);

const isDialogOpen = defineModel<boolean>()

const emit = defineEmits<{ submit: [shop_id: number] }>()

const { xs } = useDisplay();
</script>

<template>
  <v-dialog
    v-model="isDialogOpen"
    :max-width="xs ? dialogMobileWidth : dialogDesktopWidth"
  >
    <template #default="{ isActive }">
      <v-card
        title="Edit Service Confirmation"
        class="bg-secondary"
      >
        <v-card-text>
          Are you sure you want to Edit this Service?
        </v-card-text>

        <v-card-actions>
          <v-btn
            variant="tonal"
            color="primary"
            size="x-large"
            density="comfortable"
            text="Cancel"
            @click="() => isActive.value = false"
          />
          <v-btn
            variant="flat"
            color="primary"
            class="text-white"
            size="x-large"
            density="comfortable"
            text="Edit"
            @click="() => {
              emit('submit', shop_id)
              isActive.value = false;
            }"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>