<script setup lang="ts">
import { AvailableTimeDataProps, SelectTimeProps } from '@/types/Scheduling';
import { computed } from 'vue';

const { isShopOpen, scheduleData, selectedTime } = defineProps<{
  isShopOpen: boolean,
  scheduleData: AvailableTimeDataProps | undefined,
  selectedTime: SelectTimeProps | null,
}>()

const emit = defineEmits<{ selectTime: [time: SelectTimeProps] }>()

console.log(scheduleData)

const timeCards = computed(() => {
  if (!scheduleData) {
    return [];
  }

  const availables = scheduleData?.available.map(item => ({ start: item.from, end: item.to, type: 'available' }));

  const breaks = scheduleData?.breaks.map(item => {
    return {
      start: item.start_time,
      end: item.end_time,
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
      class="cursor-pointer border p-3! rounded-lg flex! flex-col items-center gap-1"
      :class="[
        timeItem.type === 'available' ? 'border-primary! bg-secondary' : timeItem.type === 'break' ? 'opacity-70' : 'opacity-50 bg-primary!',
        selectedTime?.start === timeItem.start ? 'bg-primary!' : '',]"
      :disabled="timeItem.type === 'booking' || timeItem.type === 'break'"
      @click="() => {
        emit('selectTime', timeItem)
      }"
    >
      <span class="text-center font-semibold">{{ timeItem.type === 'available' ? 'AVAILABLE' : timeItem.type === 'break'
        ? 'BREAK' : 'BOOKED' }}</span>
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