<script setup lang="ts">
import BookingConfirmDialog from '@/components/Booking/BookingConfirmDialog.vue';
import { useDatePicker } from '@/composables/DatePicker';
import ServiceListItem from '@/components/Shop/ServiceListItem.vue';
import { useBookingForm } from '@/forms/composables/bookingForm';
import { formatAsMonthAndYear, formatDate, getDateOnly, getServiceEndTime, getTimeOnly } from '@/helpers/dateHelper';
import { shopView } from '@/routes';
import { Service } from '@/types/Service';
import { Shop } from '@/types/Shop';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/composables/display.mjs';
import { useBookingSchedule } from '@/composables/bookingSchedule';
import BookingCards from '@/components/Booking/BookingCards.vue';
import { AvailableTimeDataProps } from '@/types/Scheduling';

const props = defineProps<{ shop: Shop, service: Service, scheduling: AvailableTimeDataProps, date: string }>()

const { dates, goPrevious, goNext, canGoPrevious, today, startDate, returnToStart } = useDatePicker();
const { form, validate, submit, updateDate } = useBookingForm(props.date);
const { scheduleCache, selectedDate, loading, hasFreshCache, selectDate } = useBookingSchedule(
    props.shop.id,
    props.service.id,
    props.scheduling,
    props.date);

const { xs, smAndUp } = useDisplay();

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

    console.log('cache', scheduleCache.value)
}

console.log('props.date', props.date)
console.log('dates 1', dates.value[2].toISOString())
console.log('form.date 1', form.date.toISOString())
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-xl font-bold mb-6">Booking Service</h1>

        <ServiceListItem :service="service" :route="shopView({ shop: service.shop_id })" navigate-btn-title="Edit" />

        <form @submit.prevent="() => submit(shop.id, service.id)" class="space-y-4">
            <div class="flex flex-col gap-4 mt-8">
                <div class="flex items-center justify-between gap-2">
                    <div v-if="smAndUp" class="flex items-center gap-5 min-h-7">
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

                    <div v-if="xs" class="text-lg font-semibold">{{ formatAsMonthAndYear(startDate) }}</div>

                    <div class="flex items-center gap-2">
                        <div v-if="startDate.getDate() !== today.getDate()">
                            <v-btn @click="selectTodayAndReturn" class="text-white! font-semibold" density="comfortable"
                                variant="flat" color="primary">Today</v-btn>
                        </div>

                        <div class="flex items-center gap-2">
                            <v-btn v-if="xs" :disabled="!canGoPrevious" @click="goPrevious" variant="tonal"
                                color="primary" density="comfortable" :icon="ChevronLeft"></v-btn>
                            <v-btn v-if="xs" @click="goNext" variant="tonal" color="primary" density="comfortable"
                                :icon="ChevronRight"></v-btn>
                        </div>
                    </div>
                </div>

                <div class="mx-auto sm:p-2 rounded-lg sm:border flex items-center gap-2">
                    <v-btn v-if="smAndUp" :disabled="!canGoPrevious" @click="goPrevious" variant="tonal" color="primary"
                        density="comfortable" :icon="ChevronLeft"></v-btn>

                    <div class="flex items-center sm:gap-2 gap-1">
                        <v-card v-for="date in dates" @click="() => handleDateSelect(date)"
                            :color="date.toISOString() === form.date.toISOString() ? 'primary' : 'primary8'"
                            class="cursor-pointer flex! items-center justify-center rounded-lg sm:w-11 w-10 aspect-square font-bold max-sm:text-sm"
                            :class="[date.toISOString() === form.date.toISOString() ? 'text-white' : 'text-primary', today.toISOString() === date.toISOString() && 'border border-primary!']">
                            {{ date.getDate() }}</v-card>
                    </div>

                    <v-btn v-if="smAndUp" @click="goNext" variant="tonal" color="primary" density="comfortable"
                        :icon="ChevronRight"></v-btn>
                </div>
            </div>

            <BookingCards :is-shop-open="!!scheduleCache[selectedDate]?.data.open_time"
                :schedule-data="scheduleCache[selectedDate]?.data" />

            <v-btn @click="() => {
                if (validate()) {
                    isConfirmDialogOpen = true
                }
            }" variant="flat" color="primary" class="text-white! font-bold!">Submit</v-btn>
        </form>
    </div>

    <BookingConfirmDialog :submit="submit" v-model="isConfirmDialogOpen" :selected-date="form.date"
        :end-time="getServiceEndTime(form.date, service.duration_min)" />
</template>