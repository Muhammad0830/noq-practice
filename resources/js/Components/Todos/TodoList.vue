<script setup lang="ts">
import { TodoProps } from '@/stores/TodosStore';
import { computed } from 'vue';
import TodoItem from './TodoItem.vue';

const hasNoItems = computed(() => filteredTodos.length === 0)

const { filteredTodos, type } = defineProps<{
    filteredTodos: TodoProps[],
    type: 'all' | 'finished' | 'unfinished',
}>()

const emit = defineEmits<{ removeTodo: [id: number] }>()

</script>

<template>
    <h5 class="capitalize font-bold text-xl">{{ type === 'all' ? 'All Todos' : type }}</h5>
    <ul class="flex flex-col gap-1">
        <li v-if="hasNoItems">No Result Found</li>
        <TodoItem :filtered-todos="filteredTodos" @remove-todo="(id: number) => emit('removeTodo', id)" />
    </ul>
</template>