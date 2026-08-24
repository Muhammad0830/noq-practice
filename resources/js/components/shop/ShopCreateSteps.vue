<script setup lang="ts">

const { isDefinitionStep, isSchedulingStep, isServicesStep } = defineProps<{
    isDefinitionStep: boolean, isSchedulingStep: boolean, isServicesStep: boolean
}>()
</script>

<template>
    <div class="mx-auto flex items-center justify-center max-w-150 w-1/2">
        <div :class="[
            'step-number',
            { 'active': isDefinitionStep, 'passed': isSchedulingStep || isServicesStep }]">1</div>
        <div :class="['step-separator', { 'passed': isSchedulingStep || isServicesStep }]"></div>
        <div :class="['step-number', { 'active': isSchedulingStep, 'passed': isServicesStep }]">2</div>
        <div :class="['step-separator', { 'passed': isServicesStep }]"></div>
        <div :class="['step-number', { 'active': isServicesStep }]">3</div>
    </div>
</template>