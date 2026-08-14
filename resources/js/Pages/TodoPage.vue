<script setup lang="ts">
import { useTodos } from '../stores/TodosStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import TodoList from '@/components/Todos/TodoList.vue';
import TodoSearch from '@/components/Todos/TodoSearch.vue';

const todosStore = useTodos()
const { filter, filteredTodos, allTodos } = storeToRefs(todosStore)
const { addTodo, removeTodo } = todosStore

const newTodoText = ref('')
const msg = ref('')

function addNewTodo() {
    if (!newTodoText.value) {
        return
    }

    addTodo(newTodoText.value)
    newTodoText.value = ''
}

</script>

<template>
    <div class="p-4">
        <div class="flex flex-col gap-4 items-start">
            <TodoSearch :new-todo-text="newTodoText" @update:new-todo-text="newTodoText = $event"
                @add-new-todo="() => addNewTodo()" v-model="msg" />

            <div class="flex items-center gap-2 border-y">
                <label class="flex gap-2">
                    <input v-model="filter" type="radio" value="finished">
                    <span>Finished</span>
                </label>
                <label class="flex gap-2">
                    <input v-model="filter" type="radio" value="unfinished">
                    <span>Unfinished</span>
                </label>
            </div>

            <TodoList :type="filter" :filtered-todos="filteredTodos"
                @remove-todo="(id: number) => $emit('removeTodo', id)" />

            <TodoList type="all" :filtered-todos="allTodos" @remove-todo="(id: number) => removeTodo(id)" />
        </div>
    </div>
</template>