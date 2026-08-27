import { computed, ComputedRef, Ref, ref } from "vue";

interface DatePickerProps {
    DAYS_TO_SHOW: number;
    today: Date;
    startDate: Ref<Date>;
    dates: ComputedRef<Date[]>;
    canGoPrevious: ComputedRef<boolean>;
    goNext: () => void;
    goPrevious: () => void;
    returnToStart: () => void;
}

export const useDatePicker = (): DatePickerProps => {
    const DAYS_TO_SHOW = 7;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = ref(new Date(today));

    const dates = computed(() => {
        return Array.from({ length: DAYS_TO_SHOW }, (_, index) => {
            const date = new Date(startDate.value);

            date.setDate(date.getDate() + index)

            return date;
        })
    })

    const canGoPrevious = computed(() => {
        return startDate.value.getTime() > today.getTime();
    })

    function goNext() {
        const next = new Date(startDate.value);

        next.setDate(next.getDate() + DAYS_TO_SHOW);

        startDate.value = next;
    }

    function goPrevious() {
        if (!canGoPrevious.value) {
            return;
        }

        const previous = new Date(startDate.value);

        previous.setDate(previous.getDate() - DAYS_TO_SHOW)

        startDate.value = previous;
    }

    function returnToStart() {
        const newStartDate = new Date(today)

        startDate.value = newStartDate;
    }

    return { DAYS_TO_SHOW, today, startDate, dates, canGoPrevious, goNext, goPrevious, returnToStart }
}