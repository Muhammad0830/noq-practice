import { InertiaForm, useForm } from "@inertiajs/vue3"
import { BookingForm, bookingSchema } from "../schemas/BookingSchema";
import { createBooking } from "@/actions/App/Http/Controllers/BookingController";
import { BookingFormInitials } from "../initials/BookingFormInitials";

export interface UseBookingFormProps {
    form: InertiaForm<BookingForm>;
    validate: () => boolean;
    submit: (shop_id: number, service_id: number) => void;
}

export const useBookingForm = (): UseBookingFormProps => {
    const form = useForm<BookingForm>(BookingFormInitials);

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

    return { form, validate, submit }
}