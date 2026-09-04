import { InertiaForm, useForm } from "@inertiajs/vue3"
import { BookingForm, bookingSchema } from "../schemas/BookingSchema";
import { BookingFormInitials } from "../initials/BookingFormInitials";
import { createBooking } from "@/routes";

export interface UseBookingFormProps {
    form: InertiaForm<BookingForm>;
    validate: () => boolean;
    submit: () => void;
    updateDate: (date: Date) => void;
}

export const useBookingForm = (initialDate: string, shopId: number, serviceId: number): UseBookingFormProps => {
    const form = useForm<BookingForm>(BookingFormInitials({ date: initialDate, shopId, serviceId }));

    function validate(): boolean {
        form.clearErrors();

        const result = bookingSchema.safeParse(form.data());

        if (!result.success) {
            result.error.issues.forEach(issue => {
                const fieldName = issue.path[0] as keyof typeof form.errors;
                form.setError(fieldName, issue.message)
            })

            return false;
        }

        return true;
    }

    function submit(): void {
        if (!validate()) {
            return;
        }
        console.log('working')

        form.submit(createBooking({ shop: form.shop_id, service: form.service_id }), {
            onError: () => console.log('error'),
        })

        console.log(form.errors, 'working')
    }

    function updateDate(date: Date) {
        const newDate = new Date(date);

        form.date = newDate;
    }

    return { form, validate, submit, updateDate }
}