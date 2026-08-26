import { InertiaForm, useForm } from "@inertiajs/vue3"
import { SchedulingForm } from "../schemas/ShopSchedulingSchema"
import { SchedulingWeekData } from "@/types/Scheduling";
import { schedulingWithIsOpen } from "../initials/schedulingInitials";
import { schedulingUpdate } from "@/actions/App/Http/Controllers/SchedulingController";

interface UseSchedulingFormProps {
    form: InertiaForm<SchedulingForm>;
    submit: (shop_id: number) => void;
}

export const useSchedulingForm = (scheduling: SchedulingWeekData): UseSchedulingFormProps => {
    const form = useForm<SchedulingForm>(schedulingWithIsOpen(scheduling));

    function submit(shop_id: number): void {
        form.submit(schedulingUpdate({ shop: shop_id }), {
            onError: (e) => console.error('error', e),
        });
    }

    return { form, submit }
}