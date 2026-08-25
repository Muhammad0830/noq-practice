<script setup lang="ts">
import { DayOfWeekItemType } from '@/enums/schedulingDayOfWeekEnum';
import { useSchedulingTransitionGroup } from '@/components/composables/SchedulingItemsTransitionGroup';
import { SchedulingOneDayProps, schedulingTimeLineInitials, SchedulingTimeLineProps } from '@/forms/schemas/ShopSchedulingSchema';
import { isToday } from '@/utils/dateHelper';
import { Check, ChevronDown, ChevronUp, PlusCircle, Trash2, X } from '@lucide/vue';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const dayOfWeekItem = defineModel<SchedulingOneDayProps>('dayOfWeekItem', { required: true })
const { day } = defineProps<{ day: string }>()

const { onBeforeLeave, onLeave, onAfterEnter, onAfterLeave, onBeforeEnter, onEnter } = useSchedulingTransitionGroup()

const openItem = computed(() => dayOfWeekItem.value.items.filter((item) => item.type === 'open'));
const breaks = computed(() => dayOfWeekItem.value.items.filter(item => item.type === 'closed'))

const openTime = computed(() => openItem.value[0]?.startTime)
const closeTime = computed(() => openItem.value[0]?.endTime)

const { xs, smAndUp } = useDisplay();

function addNewBreak(day: DayOfWeekItemType): void {
    const newItem = schedulingTimeLineInitials(day, 'closed', '13:00', '14:00')
    dayOfWeekItem.value.items.push(newItem);
}

function deleteBreak(itemProp: SchedulingTimeLineProps) {
    dayOfWeekItem.value.items = dayOfWeekItem.value.items.filter(item => item !== itemProp);
}

</script>

<template>
    <v-expansion-panels variant="accordion">
        <v-expansion-panel elevation="0" bg-color="blue">
            <v-expansion-panel-title :expand-icon="ChevronDown" :collapse-icon="ChevronUp" color="secondary"
                class="border-0! shadow-none!" :class="{ 'opacity-80': !dayOfWeekItem.isOpen }">
                <template v-slot:default="{ expanded }">
                    <v-row density="comfortable">
                        <v-col class="d-flex flex-col justify-start" :cols="xs ? 12 : 6">
                            <div class="relative self-start">
                                <p class="text-lg font-bold capitalize">{{ day }}</p>
                                <div v-if="isToday(day)"
                                    class="absolute left-[105%] top-0 font-semibold text-xs inline-block bg-primary rounded px-1">
                                    Today
                                </div>
                            </div>

                            <div class="flex items-center gap-2 text-sm">
                                <div class="flex items-center gap-1">
                                    <span>{{ openTime }}</span>
                                    <span>-</span>
                                    <span>{{ closeTime }}</span>
                                </div>

                                <div class="text-primary">{{ breaks.length }} breaks</div>
                            </div>
                        </v-col>

                        <v-col v-if="smAndUp" cols="6" class="flex justify-end pr-6">
                            <div class="flex items-center gap-2 text-sm">
                                <div class="flex items-center gap-1">
                                    <span>{{ openTime }}</span>
                                    <span>-</span>
                                    <span>{{ closeTime }}</span>
                                </div>

                                <div class="text-primary">{{ breaks.length }} breaks</div>
                            </div>
                        </v-col>
                    </v-row>
                </template>
            </v-expansion-panel-title>

            <v-expansion-panel-text class="bg-secondary/90">
                <TransitionGroup name="schedulingItems" tag="ul" @before-enter="onBeforeEnter" @enter="onEnter"
                    @after-enter="onAfterEnter" @before-leave="onBeforeLeave" @leave="onLeave"
                    @after-leave="onAfterLeave">
                    <li v-for="(item, index) in dayOfWeekItem.items" :key="item.id"
                        class="flex max-sm:flex-col items-center left-0! right-full! justify-between text-foreground"
                        :class="{ 'opacity-50': !dayOfWeekItem.isOpen }">
                        <p :class="{ 'cursor-default': !dayOfWeekItem.isOpen }" class="flex-1">{{ item.type === 'open' ?
                            'Open Hours'
                            : 'Break Hours' }}</p>
                        <div class="flex items-center gap-2 sm:justify-end">
                            <label class="max-sm:hidden">Start Time</label>
                            <v-text-field :disabled="!dayOfWeekItem.isOpen" type="time" v-model="item.startTime"
                                class="max-w-28 translate-y-2" />
                            <span class="sm:hidden">-</span>
                            <label class="max-sm:hidden">End Time</label>
                            <v-text-field :disabled="!dayOfWeekItem.isOpen" type="time" v-model="item.endTime"
                                class="max-w-28 translate-y-2" />
                            <div class="w-9">
                                <v-btn :disabled="!dayOfWeekItem.isOpen" @click="() => deleteBreak(item)"
                                    v-if="item.type === 'closed'" variant="tonal" color="red" density="comfortable"
                                    :icon="Trash2"></v-btn>
                            </div>
                        </div>
                    </li>

                    <div key="add-toggle-buttons" class="flex items-center gap-4 justify-center sm:justify-between">
                        <div class="flex transition-all sm:flex-1 duration-500">
                            <v-btn :disabled="!dayOfWeekItem.isOpen" @click="addNewBreak(day as DayOfWeekItemType)"
                                class="text-white" color="primary" :prepend-icon="PlusCircle">
                                Add Breaks
                            </v-btn>
                        </div>

                        <div class="flex items-center gap-2">
                            <span v-show="dayOfWeekItem.isOpen"></span>
                            <span v-show="!dayOfWeekItem.isOpen"></span>
                            <v-switch inset="material" :true-icon="Check" :false-icon="X" class="translate-y-3"
                                v-model="dayOfWeekItem.isOpen" color="primary"></v-switch>
                        </div>
                    </div>
                </TransitionGroup>

            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<style scoped>
.schedulingItems-move,
.schedulingItems-enter-active,
.schedulingItems-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.schedulingItems-enter-from,
.schedulingItems-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.schedulingItems-leave-active {
    position: absolute;
    width: 93.5%;
}

ul {
    transition: height 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>