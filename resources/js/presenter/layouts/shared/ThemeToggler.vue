<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isDark = computed(() => theme.current.value.dark)
</script>

<template>
    <button @click="() => theme.toggle()"
        class="flex items-center justify-center relative! overflow-hidden border! w-9 aspect-square border-foreground p-1 rounded-full">
        <div :class="[isDark ? 'translate-y-[-120%]' : 'translate-y-0']"
            class="absolute transition-translate duration-100">
            <Sun />
        </div>
        <div :class="[isDark ? 'translate-y-0' : 'translate-y-[120%]']" class="transition-translate duration-100">
            <Moon />
        </div>
    </button>
</template>