<script setup lang="ts">
const { newTodoText } = defineProps<{ newTodoText: string }>()
const msg = defineModel();

const emit = defineEmits<{
    'update:newTodoText': [value: string],
    addNewTodo: []
}>()
</script>

<template>
    <div class="flex items-center gap-2">
        <label>
            New Todo:
            <input :value="newTodoText" @input="emit('update:newTodoText', ($event.target as HTMLInputElement).value)"
                type="text" @keydown.enter="$emit('addNewTodo')" class="border rounded px-1">
        </label>
        <button :disabled="!newTodoText" @click="$emit('addNewTodo')"
            class="border bg-gray-200 px-2 py.5 rounded cursor-pointer">Add</button>

        <input type="text" v-model="msg">
    </div>
</template>