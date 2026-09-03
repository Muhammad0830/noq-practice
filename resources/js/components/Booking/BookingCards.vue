<script setup lang="ts">
import { getTimeOnly } from '@/helpers/dateHelper';
import { AvailableTimeDataProps } from '@/types/Scheduling';
import { computed } from 'vue';

const { isShopOpen, scheduleData } = defineProps<{ isShopOpen: boolean, scheduleData: AvailableTimeDataProps }>()

const timeCards = computed(() => {
    const availables = scheduleData.available.map(item => ({ start: item.from, end: item.to, type: 'available' }));

    const breaks = scheduleData.breaks.map(item => {
        const start = getTimeOnly(new Date(item.start_time));
        const end = getTimeOnly(new Date(item.end_time));

        return {
            start,
            end,
            type: 'break'
        }
    });

    const bookings = scheduleData.bookings.map(item => ({ start: item.start_time, end: item.end_time, type: 'booking' }));

    return [...availables, ...breaks, ...bookings]
        .sort((a, b) => a.start.localeCompare(b.start));
})
</script>

<template>
  <div
    v-if="isShopOpen"
    class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-3 gap-2"
  >
    <v-card
      v-for="timeItem in timeCards"
      :key="`${timeItem.start}-${timeItem.end}`"
      :class="[timeItem.type === 'available' ? 'border-primary! bg-secondary!' : timeItem.type === 'break' ? '' : '']"
      class="cursor-pointer border p-3! rounded-lg flex! flex-col items-center gap-2"
    >
      <span class="text-center text-lg font-semibold">Available</span>
      <div class="flex items-center gap-1 text-lg font-bold">
        <span>{{ timeItem.start }}</span>
        <span>-</span>
        <span>{{ timeItem.end }}</span>
      </div>
    </v-card>
  </div>
  <div
    v-else
    class="p-4 min-h-40 rounded-lg border border-primary bg-secondary flex justify-center items-center text-lg font-bold text-primary"
  >
    Shop does not work on this day.
  </div>
</template>