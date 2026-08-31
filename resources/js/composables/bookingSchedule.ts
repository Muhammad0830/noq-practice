import { bookPage } from "@/routes";
import { AvailableTimeDataProps, ScheduleCache } from "@/types/Scheduling";
import { router } from "@inertiajs/vue3";
import { ref } from "vue";

const CACHE_TTL = 3 * 60 * 1000; // 3 minutes;

export const useBookingSchedule = (
    shop_id: number,
    service_id: number,
    scheduling: AvailableTimeDataProps,
    initialDate: string) => {
    const scheduleCache = ref<Record<string, ScheduleCache>>({
        [initialDate]: {
            data: scheduling,
            fetchedAt: Date.now(),
        }
    })

    const selectedDate = ref(initialDate);
    const loading = ref(false)

    function hasFreshCache(date: string): boolean {
        const cached = scheduleCache.value[date];

        if (!cached) {
            return false;
        }

        return Date.now() - cached.fetchedAt < CACHE_TTL;
    }

    function selectDate(date: string) {
        selectedDate.value = date

        updateUrl(date);

        if (hasFreshCache(date)) {
            return
        }

        fetchSchedule(date)
    }

    function updateUrl(date: string) {
        const url = new URL(window.location.href);

        url.searchParams.set('date', date);

        window.history.replaceState({}, '', url);
    }

    function fetchSchedule(date: string) {
        loading.value = true;

        console.log('working', date)
        router.visit(
            bookPage({
                shop: shop_id,
                service: service_id,
            }, { query: { date: date } }).url,
            {
                only: ['scheduling'],
                preserveState: true,
                preserveScroll: true,

                onSuccess: (page) => {
                    scheduleCache.value[date] = {
                        data: page.props.scheduling as AvailableTimeDataProps,
                        fetchedAt: Date.now(),
                    }
                },

                onFinish: () => {
                    loading.value = false
                },
            }
        )
    }

    return {
        scheduleCache,
        selectedDate,
        loading,
        hasFreshCache,
        selectDate,
        fetchSchedule,
    }
}