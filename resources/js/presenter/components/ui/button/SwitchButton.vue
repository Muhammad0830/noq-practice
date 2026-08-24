<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>

<template>
    <button type="button" role="switch" :aria-checked="model"
        class="relative h-8 w-16 flex items-center shrink-0 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        :class="model ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'" @click="model = !model">
        <span
            class="pointer-events-none absolute left-[5%] size-6.5 rounded-full bg-white shadow-sm transition-all duration-200"
            :class="model ? 'left-[94%] -translate-x-full' : 'left-[6%] translate-x-0'" />
    </button>
</template>