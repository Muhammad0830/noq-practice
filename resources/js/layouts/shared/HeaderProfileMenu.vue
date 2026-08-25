<script setup lang="ts">
import { settings } from '@/routes/index.js';
import { Link } from '@inertiajs/vue3';
import { UserRound } from '@lucide/vue';
import ProfileMenuProfileItem from './ProfileMenuProfileItem.vue';
import { createShopPage } from '@/routes/index.js';

const emit = defineEmits<{ openModal: [] }>()
</script>

<template>
    <v-menu :close-on-content-click="false" location="bottom center" offset="8">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" rounded="xl" variant="outlined" :icon="UserRound" density="comfortable"></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card min-width=" 200" max-width="250" rounded="lg">
                <v-list class="flex flex-col gap-1 justify-space-between pa-2 bg-secondary">
                    <ProfileMenuProfileItem :is-active="isActive" />

                    <Link @click="() => isActive.value = false" :href="createShopPage({
                        query: { 'step': 'shop-definition' }
                    })">
                        <v-list-item
                            class="px-2 min-h-8! h-4! cursor-pointer text-yellow-500! hover:bg-foreground/10! rounded">
                            <span>Add your own shop!</span>
                        </v-list-item>
                    </Link>

                    <Link @click="() => isActive.value = false" :href="settings()">
                        <v-list-item class="px-2 min-h-8! h-4! cursor-pointer hover:bg-foreground/10! rounded">
                            <span>Settings</span>
                        </v-list-item>
                    </Link>

                    <v-list-item @click="() => {
                        isActive.value = false
                        emit('openModal')
                    }" class="px-2 min-h-8! h-4! cursor-pointer hover:bg-destructive/10! rounded">
                        <span class="text-destructive">Logout</span>
                    </v-list-item>
                </v-list>
            </v-card>
        </template>
    </v-menu>
</template>