<script setup lang="ts">
import { dialogDesktopWidth, dialogMobileWidth } from '@/constants/constants';
import { useDisplay } from 'vuetify';

const isModalOpen = defineModel<boolean>()

const emit = defineEmits<{ logout: [] }>()

const { xs } = useDisplay();
</script>

<template>
  <v-dialog
    v-model="isModalOpen"
    :max-width="xs ? dialogMobileWidth : dialogDesktopWidth"
  >
    <template #default="{ isActive }">
      <v-card
        title="Logout"
        class="bg-secondary"
      >
        <v-card-text>
          Are you sure you want to logout?
        </v-card-text>

        <v-card-actions>
          <v-btn
            variant="outlined"
            color="primary"
            size="x-large"
            density="comfortable"
            text="Cancel"
            @click="() => isActive.value = false"
          />
          <v-btn
            variant="outlined"
            color="red"
            size="x-large"
            density="comfortable"
            text="Logout"
            @click="() => {
              emit('logout')
              isActive.value = false;
            }"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>