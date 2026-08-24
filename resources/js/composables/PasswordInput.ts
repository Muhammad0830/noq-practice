import { ref } from "vue";

interface UsePasswordInputProps {
    visible: { value: boolean };
    toggleVisible: () => void;
}

export function usePasswordInput(): UsePasswordInputProps {
    const visible = ref(false);

    function toggleVisible() {
        visible.value = !visible.value;
    }
    return { visible, toggleVisible }
}