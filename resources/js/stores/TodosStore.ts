import { loadTodos } from '@/utils/todosHelper'
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export type todoType = 'all' | 'finished' | 'unfinished';

export interface TodoProps {
  text: string,
  id: number,
  isFinished: boolean,
  isEditing: boolean,
}

export const useTodos = defineStore('todos', () => {
  const todos = ref<TodoProps[]>(loadTodos())
  const filter = ref<todoType>('finished')

  const finishedTodos = computed(() =>
    todos.value.filter((todo: TodoProps) => todo.isFinished))

  const unFinishedTodos = computed(() =>
    todos.value.filter((todo: TodoProps) => !todo.isFinished))

  const allTodos = computed(() => [...finishedTodos.value, ...unFinishedTodos.value])

  const filteredTodos = computed(() => {
    if (filter.value === 'finished') {
      return finishedTodos.value
    } else if (filter.value === 'unfinished') {
      return unFinishedTodos.value
    }
    return [];
  })

  watch(todos, () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }, { deep: true })

  function addTodo(text: string) {
    const id = Math.max(...todos.value.map(todo => todo.id)) + 1
    todos.value.push({ text, id, isFinished: false, isEditing: false, })
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter((todo: TodoProps) => todo.id !== id)
  }

  return { allTodos, filter, filteredTodos, addTodo, removeTodo }
})