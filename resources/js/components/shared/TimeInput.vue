<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    modelValue: number,
    label?: string
    errorMessages?: string | string[]
    disabled?: boolean
    readonly?: boolean
    required?: boolean
}>()

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

const time = computed({
    get() {
        const hours = Math.floor(props.modelValue / 60)
        const minutes = props.modelValue % 60

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    },

    set(value: string) {
        const [hours, minutes] = value.split(':').map(Number)

        emit(
            'update:modelValue',
            hours * 60 + minutes
        )
    },
})
</script>

<template>
  <v-text-field
    id="name"
    v-model="time"
    class="sm:w-28"
    type="time"
    :label="label"
    :error-messages="errorMessages"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    density="comfortable"
  />
</template>