<script setup lang="ts">
import type { TodoProps } from '@/presenter/stores/TodosStore'
import { Pencil, Save, Trash2 } from '@lucide/vue';

const { filteredTodos } = defineProps<{ filteredTodos: TodoProps[] }>()
const emit = defineEmits<{ removeTodo: [id: number] }>()

</script>

<template>
    <li v-for="todo, index in filteredTodos" :key="todo.id" class="flex items-center gap-2">
        <input :id="`filtered-finishied-check-${index}`" v-model="todo.isFinished" type="checkbox">
        <label :for="`filtered-finishied-check-${index}`" v-show="!todo.isEditing"
            class="px-1 cursor-pointer bg-gray-200 rounded">
            {{ todo.text }}</label>
        <input v-show="todo.isEditing" class="bg-gray-100 px-1 rounded border" type="text" v-model="todo.text">
        <button @click="() => $emit('removeTodo', todo.id)"
            class="flex items-center gap-2 border bg-gray-200 px-2 rounded cursor-pointer">
            <Trash2 class="size-4" />
            <span>Remove</span>
        </button>
        <button @click="() => todo.isEditing = !todo.isEditing"
            class="flex gap-2 items-center border rounded bg-gray-200 px-2 cursor-pointer">
            <Pencil v-show="!todo.isEditing" class="size-4" />
            <Save v-show="todo.isEditing" class="size-4" />
            <span>{{ todo.isEditing ? 'Save' : 'Edit' }}</span>
        </button>
    </li>
</template>