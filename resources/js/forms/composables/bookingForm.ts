import { InertiaForm, useForm } from "@inertiajs/vue3"
import { BookingForm, bookingSchema } from "../schemas/BookingSchema";
import { BookingFormInitials } from "../initials/BookingFormInitials";
import { createBooking } from "@/routes";

export interface UseBookingFormProps {
    form: InertiaForm<BookingForm>;
    validate: () => boolean;
    submit: (shop_id: number, service_id: number) => void;
    updateDate: (date: Date) => void;
}

export const useBookingForm = (initialDate: string): UseBookingFormProps => {
    const form = useForm<BookingForm>(BookingFormInitials(initialDate));

    function validate(): boolean {
        form.clearErrors();

        const result = bookingSchema.safeParse(form.data());

        if (!result.success) {
            result.error.issues.forEach(issue => {
                const fieldName = issue.path[0] as keyof typeof form.errors;
                form.setError(fieldName, issue.message)
            })
            console.log(form.errors);
            return false;
        }

        return true;
    }

    function submit(shop_id: number, service_id: number): void {
        form.shop_id = shop_id;
        form.service_id = service_id;

        if (!validate()) {
            return;
        }

        form.submit(createBooking({ shop: shop_id, service: service_id }), {
            onSuccess: () => console.log('success'),
            onError: () => console.log('error'),
        })
    }

    function updateDate(date: Date) {
        const newDate = new Date(date);

        form.date = newDate;
    }

    return { form, validate, submit, updateDate }
}