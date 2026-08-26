import { InertiaForm, useForm } from "@inertiajs/vue3"
import { ServicesEditFormProps, servicesItemSchema } from "../schemas/ShopServicesSchema";
import { editService } from "@/actions/App/Http/Controllers/ServicesController";
import { Service } from "@/types/Service";

export interface UseServicesEditFormProps {
    form: InertiaForm<ServicesEditFormProps>
    submit: (shop_id: number) => void;
}


export const useServicesEditForm = (service: Service): UseServicesEditFormProps => {
    const form = useForm<ServicesEditFormProps>({ ...service, is_active: Boolean(service.is_active) })

    function validate(): boolean {
        form.clearErrors();

        const result = servicesItemSchema.safeParse(form.data())

        if (!result.success) {
            result.error.issues.forEach(issue => {
                const fieldName = issue.path[0] as keyof typeof form.errors;
                form.setError(fieldName, issue.message);
            })

            return false;
        }

        return true;
    }

    function submit(shop_id: number): void {
        if (!validate()) return;

        form.submit(editService({ shop: shop_id, service: form.id }), {
            onSuccess: () => console.log('Service updated successfully!'),
            onError: (e) => console.error('Service edit failed', e)
        })
    }

    return { form, submit }
}