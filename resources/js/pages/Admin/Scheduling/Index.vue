<script setup lang="ts">
import { useSchedulingTransitionGroup } from '@/components/Composables/SchedulingItemsTransitionGroup';
import { isToday } from '@/helpers/dateHelper';
import { SchedulingWeekData } from '@/types/Scheduling';
import { ChevronDown, ChevronUp } from '@lucide/vue';
import { useDisplay } from 'vuetify/lib/composables/display.mjs';


const { scheduling } = defineProps<{ scheduling: SchedulingWeekData }>()
console.log(scheduling)
const { onBeforeLeave, onLeave, onAfterEnter, onAfterLeave, onBeforeEnter, onEnter } = useSchedulingTransitionGroup()

const { xs, smAndUp } = useDisplay();
</script>

<template>
    <div class="flex flex-col gap-1">
        <div v-for="(item, day) in scheduling" class="rounded-lg overflow-hidden">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel elevation="0" bg-color="blue">
                    <v-expansion-panel-title :expand-icon="ChevronDown" :collapse-icon="ChevronUp" color="secondary"
                        class="border-0! shadow-none!">
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
                                            <span>{{ item.open[0].start_time }}</span>
                                            <span>-</span>
                                            <span>{{ item.open[0].end_time }}</span>
                                        </div>

                                        <div class="text-primary">{{ item.closed.length }} breaks</div>
                                    </div>
                                </v-col>

                                <v-col v-if="smAndUp" cols="6" class="flex justify-end pr-6">
                                    <div class="flex items-center gap-2 text-sm">
                                        <div class="flex items-center gap-1">
                                            <span>{{ item.open[0].start_time }}</span>
                                            <span>-</span>
                                            <span>{{ item.open[0].end_time }}</span>
                                        </div>

                                        <div class="text-primary">{{ item.closed.length }} breaks</div>
                                    </div>
                                </v-col>
                            </v-row>
                        </template>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text class="bg-secondary/90">
                        <TransitionGroup name="schedulingItems" tag="ul" @before-enter="onBeforeEnter" @enter="onEnter"
                            @after-enter="onAfterEnter" @before-leave="onBeforeLeave" @leave="onLeave"
                            @after-leave="onAfterLeave">
                            <li :key="item.open[0].id"
                                class="flex max-sm:flex-col items-center left-0! right-full! justify-between text-foreground">
                                <p class="flex-1">{{ item.open[0].type === 'open' ? 'Open Hours' : 'Break Hours' }}</p>
                                <div class="flex items-center gap-2 sm:justify-end">
                                    <label class="max-sm:hidden">Start Time</label>
                                    <v-text-field type="time" v-model="item.open[0].start_time"
                                        class="max-w-28 translate-y-2" />
                                    <span class="sm:hidden">-</span>
                                    <label class="max-sm:hidden">End Time</label>
                                    <v-text-field type="time" v-model="item.open[0].end_time"
                                        class="max-w-28 translate-y-2" />
                                    <!-- <div class="w-9">
                                    <v-btn @click="() => deleteBreak(item)" v-if="item.type === 'closed'"
                                        variant="tonal" color="red" density="comfortable" :icon="Trash2"></v-btn>
                                </div> -->
                                </div>
                            </li>

                            <li v-for="(schedulingItem, index) in item.closed" :key="schedulingItem.id"
                                class="flex max-sm:flex-col items-center left-0! right-full! justify-between text-foreground">
                                <p class="flex-1">{{ schedulingItem.type === 'open' ? 'Open Hours' : 'Break Hours' }}
                                </p>
                                <div class="flex items-center gap-2 sm:justify-end">
                                    <label class="max-sm:hidden">Start Time</label>
                                    <v-text-field type="time" v-model="schedulingItem.start_time"
                                        class="max-w-28 translate-y-2" />
                                    <span class="sm:hidden">-</span>
                                    <label class="max-sm:hidden">End Time</label>
                                    <v-text-field type="time" v-model="schedulingItem.end_time"
                                        class="max-w-28 translate-y-2" />
                                    <!-- <div class="w-9">
                                    <v-btn @click="() => deleteBreak(item)" v-if="item.type === 'closed'"
                                        variant="tonal" color="red" density="comfortable" :icon="Trash2"></v-btn>
                                </div> -->
                                </div>
                            </li>

                            <!-- <div key="add-toggle-buttons" class="flex items-center gap-4 justify-center sm:justify-between">
                            <div class="flex transition-all sm:flex-1 duration-500">
                                <v-btn @click="addNewBreak(day as DayOfWeekItemType)" class="text-white" color="primary"
                                    :prepend-icon="PlusCircle">
                                    Add Breaks
                                </v-btn>
                            </div>
                        </div> -->
                        </TransitionGroup>

                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>