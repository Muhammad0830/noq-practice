<script setup lang="ts">
import { dialogDesktopWidth, dialogMobileWidth } from '@/ui_constants/constants';
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
    <v-dialog :max-width="xs ? dialogMobileWidth : dialogDesktopWidth" v-model="isDialogOpen">
        <template v-slot:default="{ isActive }">
            <v-card title="Edit Service Confirmation" class="bg-secondary">
                <v-card-text>
                    Are you sure you want to Edit this Service?
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="() => isActive.value = false" variant="tonal" color="primary" size="x-large"
                        density="comfortable" text="Cancel"></v-btn>
                    <v-btn @click="() => {
                        emit('submit', shop_id)
                        isActive.value = false;
                    }" variant="flat" color="primary" class="text-white" size="x-large" density="comfortable"
                        text="Edit"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>