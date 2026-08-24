import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useDisplay } from "vuetify";

export const useSidebarStore = defineStore('sidebar', () => {
    const { mdAndDown } = useDisplay();

    // for user preference based sidebar isOpen
    const stored = localStorage.getItem('sidebarOpen') || 'null';
    const parsed = stored !== null ? JSON.parse(stored) : null;

    const isOpen = ref<boolean>(
        parsed !== null
            ? parsed
            : mdAndDown.value
                ? false
                : true);

    function toggleSidebar(): void {
        isOpen.value = !isOpen.value
    }

    watch(isOpen, (value) => {
        localStorage.setItem('sidebarOpen', JSON.stringify(value));
    })

    return { isOpen, toggleSidebar }
});