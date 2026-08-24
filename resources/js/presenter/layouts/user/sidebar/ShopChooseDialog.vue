<script setup lang="ts">
import { dialogDesktopWidth, dialogMobileWidth } from '@/presenter/ui_constants/constants';
import { adminDashboard } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { useDisplay } from 'vuetify';

const isDialogOpen = defineModel<boolean>({ required: true })
const { xs } = useDisplay();

const page = usePage();
const { user } = page.props.auth;
</script>

<template>
    <v-dialog :max-width="xs ? dialogMobileWidth : dialogDesktopWidth" v-model="isDialogOpen">
        <template v-slot:default="{ isActive }">
            <v-card title="Choose a Shop Panel to move to" class="bg-secondary pb-4 flex flex-col items-center gap-1">
                <Link v-for="shop in user?.admin.shops" :href="adminDashboard({ shop: shop.id })"
                    class="w-4/5 max-auto">
                    <v-btn @click="() => isActive.value = false" class="w-full" variant="text" color="primary"
                        size="x-large" density="comfortable" :text="`${shop.name} Panel`"></v-btn>
                </Link>
            </v-card>
        </template>
    </v-dialog>
</template>