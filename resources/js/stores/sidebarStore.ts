import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore('sidebar', () => {
    const isOpen = ref<boolean>(true);

    function toggleSidebar(): void {
        isOpen.value = !isOpen.value
    }

    return { isOpen, toggleSidebar }
});