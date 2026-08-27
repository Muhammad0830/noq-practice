<script setup lang="ts">
import { dialogDesktopWidth, dialogMobileWidth } from '@/constants/constants';
import { formatAsMonthAndYear, getServiceEndTime, getTimeOnly } from '@/helpers/dateHelper';
import { useDisplay } from 'vuetify/lib/composables/display.mjs';

const { selectedDate, endTime } = defineProps<{ selectedDate: Date, endTime: string }>()
const isDialogOpen = defineModel<boolean>()
const emit = defineEmits<{ submit: [] }>()

const { xs } = useDisplay()
</script>

<template>
    <v-dialog :max-width="xs ? dialogMobileWidth : dialogDesktopWidth" v-model="isDialogOpen">
        <template v-slot:default="{ isActive }">
            <v-card title="Edit Service Confirmation" class="text-center bg-secondary">
                <v-card-text>
                    <span>Are you sure you want to Book this time?</span>

                    <div class="mt-2 flex flex-col items-center gap-1 text-lg">
                        <div class="bg-primary/20 px-1 rounded">{{ formatAsMonthAndYear(selectedDate) }}</div>
                        <div class="bg-primary/20 px-1 rounded">From: {{ getTimeOnly(selectedDate) }}</div>
                        <div class="bg-primary/20 px-1 rounded">To: {{ endTime }}</div>
                    </div>
                </v-card-text>

                <v-card-actions class="justify-center">
                    <v-btn @click="() => isActive.value = false" variant="tonal" color="primary" size="x-large"
                        density="comfortable" text="Cancel"></v-btn>
                    <v-btn @click="() => {
                        emit('submit')
                        isActive.value = false;
                    }" variant="flat" color="primary" class="text-white" size="x-large" density="comfortable"
                        text="Book"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>