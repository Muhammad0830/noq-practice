<script setup lang="ts">
import BookingConfirmDialog from '@/components/Booking/BookingConfirmDialog.vue';
import { useDatePicker } from '@/composables/DatePicker';
import ServiceListItem from '@/components/Shop/ServiceListItem.vue';
import { useBookingForm } from '@/forms/composables/bookingForm';
import { formatAsMonthAndYear, getDateOnly, getServiceEndTime } from '@/helpers/dateHelper';
import { shopView } from '@/routes';
import { Service } from '@/types/Service';
import { Shop } from '@/types/Shop';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/composables/display.mjs';
import { useBookingSchedule } from '@/composables/bookingSchedule';
import BookingCards from '@/components/Booking/BookingCards.vue';
import { AvailableTimeDataProps, SelectTimeProps } from '@/types/Scheduling';

const props = defineProps<{ shop: Shop, service: Service, scheduling: { data: AvailableTimeDataProps }, date: string }>()

const { dates, goPrevious, goNext, canGoPrevious, today, startDate, returnToStart } = useDatePicker();
const { form, validate, submit, updateDate } = useBookingForm(props.date, props.shop.id, props.service.id);
const { scheduleCache, selectedDate, selectDate } = useBookingSchedule(
  props.shop.id,
  props.service.id,
  props.scheduling.data,
  props.date);

const { xs, smAndUp } = useDisplay();

const selectedTime = ref<SelectTimeProps | null>(null)
const isConfirmDialogOpen = ref(false);

function selectTodayAndReturn() {
  const newDate = new Date(today);
  form.date = newDate;
  returnToStart()
}

function handleDateSelect(date: Date) {
  const dateString = getDateOnly(date)

  selectDate(dateString)

  updateDate(date)
}

function handleSelectTime(time: SelectTimeProps): void {
  selectedTime.value = time;

  const newDate = new Date(form.date);
  const [hours, minutes] = time.start.split(':');

  newDate.setHours(+hours, +minutes, 0, 0);

  form.date = newDate;
}
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold mb-6">
      Booking Service
    </h1>

    <ServiceListItem
      :service="service"
      :route="shopView({ shop: service.shop_id })"
      navigate-btn-title="Edit"
    />

    <form
      class="space-y-4"
      @submit.prevent="() => submit()"
    >
      <div class="flex flex-col gap-4 mt-8">
        <div class="flex items-center justify-between gap-2">
          <div
            v-if="smAndUp"
            class="flex items-center gap-5 min-h-7"
          >
            <div class="space-x-2">
              <span class="text-primary">Today: </span>
              <span class="font-bold">{{ getDateOnly(today) }}</span>
            </div>

            <span class="text-primary font-bold">/</span>

            <div class="space-x-2">
              <span class="text-primary">Selected: </span>
              <span class="font-bold">{{ getDateOnly(form.date) }}</span>
            </div>
          </div>

          <div
            v-if="xs"
            class="text-lg font-semibold"
          >
            {{ formatAsMonthAndYear(startDate) }}
          </div>

          <div class="flex items-center gap-2">
            <div v-if="startDate.getDate() !== today.getDate()">
              <v-btn
                class="text-white! font-semibold"
                density="comfortable"
                variant="flat"
                color="primary"
                @click="selectTodayAndReturn"
              >
                Today
              </v-btn>
            </div>

            <div class="flex items-center gap-2">
              <v-btn
                v-if="xs"
                :disabled="!canGoPrevious"
                variant="tonal"
                color="primary"
                density="comfortable"
                :icon="ChevronLeft"
                @click="goPrevious"
              />
              <v-btn
                v-if="xs"
                variant="tonal"
                color="primary"
                density="comfortable"
                :icon="ChevronRight"
                @click="goNext"
              />
            </div>
          </div>
        </div>

        <div class="mx-auto sm:p-2 rounded-lg sm:border flex items-center gap-2">
          <v-btn
            v-if="smAndUp"
            :disabled="!canGoPrevious"
            variant="tonal"
            color="primary"
            density="comfortable"
            :icon="ChevronLeft"
            @click="goPrevious"
          />

          <div class="flex items-center sm:gap-2 gap-1">
            <v-card
              v-for="dateItem in dates"
              :key="dateItem.toISOString()"
              :color="dateItem.toISOString() === form.date.toISOString() ? 'primary' : 'primary8'"
              class="cursor-pointer flex! items-center justify-center rounded-lg sm:w-11 w-10 aspect-square font-bold max-sm:text-sm"
              :class="[dateItem.toISOString() === form.date.toISOString() ? 'text-white' : 'text-primary', today.toISOString() === dateItem.toISOString() && 'border border-primary!']"
              @click="() => handleDateSelect(dateItem)"
            >
              {{ dateItem.getDate() }}
            </v-card>
          </div>

          <v-btn
            v-if="smAndUp"
            variant="tonal"
            color="primary"
            density="comfortable"
            :icon="ChevronRight"
            @click="goNext"
          />
        </div>
      </div>

      <BookingCards
        :is-shop-open="!!scheduleCache[selectedDate]?.data.open_time"
        :schedule-data="scheduleCache[selectedDate]?.data"
        :selected-time="selectedTime"
        @select-time="handleSelectTime"
      />

      <v-btn
        :disabled="!selectedTime"
        variant="flat"
        color="primary"
        class="text-white! font-bold!"
        @click="() => {
          if (validate()) {
            isConfirmDialogOpen = true
          }
        }"
      >
        Submit
      </v-btn>
    </form>
  </div>

  <BookingConfirmDialog
    v-model="isConfirmDialogOpen"
    :service="props.service"
    :selected-date="form.date"
    :end-time="getServiceEndTime(form.date, service.duration_min)"
    :shop-name="props.shop.name"
    @submit="submit"
  />
</template>