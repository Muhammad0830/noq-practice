<script setup lang="ts">
import { profile, settings } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { UserRound } from '@lucide/vue';

const emit = defineEmits<{ openModal: [] }>()
const page = usePage()
const user = page.props.auth.user;
</script>

<template>
    <v-menu :close-on-content-click="false" location="bottom center" offset="8">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" rounded="xl" variant="outlined" :icon="UserRound" density="comfortable"></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card min-width=" 200" max-width="250" rounded="lg">
                <v-list class="flex flex-col justify-space-between pa-2 bg-secondary">
                    <Link @click="() => isActive.value = false" :href="profile()">
                        <v-list-item class="px-2 cursor-pointer hover:bg-foreground/10! rounded">
                            <div class="flex gap-2 items-center">
                                <v-icon :icon="UserRound" varianat="outlined"
                                    class="border! border-foreground rounded-full p-1 aspect-square"
                                    size="large"></v-icon>
                                <div class="flex flex-col flex-1 min-w-0!">
                                    <span class="truncate text-sm">{{ user?.name || 'Unknown' }}</span>
                                    <span class="text-xs text-foreground/70 truncate">{{ user?.email || 'Unknown'
                                        }}</span>
                                </div>
                            </div>
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