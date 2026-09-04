<script setup lang="ts">
import { formatAsMonthAndYear, getTimeOnly } from '@/helpers/dateHelper';
import { Service } from '@/types/Service';
import { useDisplay } from 'vuetify';

const { selectedDate, endTime, service, shopName } = defineProps<{
  selectedDate: Date,
  endTime: string,
  service: Service,
  shopName: string,
}>()
const isDialogOpen = defineModel<boolean>()
const emit = defineEmits<{ submit: [] }>()

const { xs } = useDisplay()
</script>

<template>
  <v-dialog
    v-model="isDialogOpen"
    :width="xs ? 320 : 600"
  >
    <template #default="{ isActive }">
      <v-card
        title="Edit Service Confirmation"
        class="text-center bg-secondary"
      >
        <v-card-text>
          <span class="text-nowrap">Check your booking information.</span>

          <div class="my-4 flex flex-col flex-wrap gap-1 items-center justify-center w-full">
            <div class="flex gap-2 items-center">
              <span class="font-bold text-lg">Shop:</span>
              <span class="text-lg bg-primary/20 px-1 rounded truncate">{{ shopName }}aewgawgaw aewg e</span>
            </div>
            <div class="flex gap-2 items-center">
              <span class="font-bold text-lg">Service:</span>
              <span class="text-lg bg-primary/20 px-1 rounded">{{ service.name }}</span>
            </div>
            <div class="flex gap-2 items-center">
              <span class="font-bold text-lg">Price:</span>
              <span class="text-lg bg-primary/20 px-1 rounded">${{ service.price }}</span>
            </div>
          </div>

          <div class="mt-2 flex flex-col items-center gap-1 text-lg">
            <div class="bg-primary/20 px-1 rounded">
              {{ formatAsMonthAndYear(selectedDate) }}
            </div>
            <div class="bg-primary/20 px-1 rounded">
              From: {{ getTimeOnly(selectedDate) }}
            </div>
            <div class="bg-primary/20 px-1 rounded">
              To: {{ endTime }}
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="justify-center">
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
            text="Book"
            @click="() => {
              emit('submit')
              isActive.value = false;
            }"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>