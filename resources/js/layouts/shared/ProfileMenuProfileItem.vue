<script setup lang="ts">
import { profile } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { UserRound } from '@lucide/vue';
import { computed, Ref } from 'vue';

const { isActive } = defineProps<{ isActive: Ref<boolean> }>()

const page = usePage()
const user = computed(() => page.props.auth.user);

</script>

<template>
    <Link @click="() => isActive.value = false" :href="profile()">
        <v-list-item class="px-2 cursor-pointer hover:bg-foreground/10! rounded border">
            <div class="flex gap-2 items-center">
                <v-icon :icon="UserRound" varianat="outlined"
                    class="border! border-foreground rounded-full p-1 aspect-square" size="large"></v-icon>
                <div class="flex flex-col flex-1 min-w-0!">
                    <span class="truncate text-sm">{{ user?.name || 'Unknown' }}</span>
                    <span class="text-xs text-foreground/70 truncate">
                        {{ user?.email || 'Unknown' }}
                    </span>
                </div>
            </div>
        </v-list-item>
    </Link>
</template>