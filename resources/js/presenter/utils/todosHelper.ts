import { TodoProps } from "@/presenter/stores/TodosStore";

export const loadTodos = (): TodoProps[] => {
    const stored = localStorage.getItem('todos')

    if (!stored) return []

    try {
        return JSON.parse(stored);
    } catch {
        return []
    }
}