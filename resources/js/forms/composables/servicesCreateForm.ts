import { InertiaForm, useForm } from "@inertiajs/vue3";
import { toRaw } from "vue";
import { servicesInitials, servicesItemSchema, ServicesCreateFormProps } from "../schemas/ShopServicesSchema";
import z from "zod";
import { createServices } from "@/actions/App/Http/Controllers/ServicesController";

export interface UseServicesFormInterface {
    form: InertiaForm<ServicesCreateFormProps>;
    addServiceItem: () => void;
    postNewItems: (shop_id: number) => void;
    removeNewService: (id: number) => void;
}

export const useServicesForm = (): UseServicesFormInterface => {
    const form = useForm<ServicesCreateFormProps>({
        services: structuredClone(toRaw([servicesInitials()]))
    })

    function addServiceItem() {
        form.services.push(servicesInitials());
    }

    function postNewItems(shop_id: number) {
        if (!validate()) return;

        form
            .transform((data) => ({
                ...data,
                shop_id: shop_id,
            }))
            .submit(createServices({ shop: shop_id }), {
                onError: (e: any) => {
                    console.error('error', e);
                }
            });
    }

    function removeNewService(id: number) {
        form.services = form.services.filter(service => service.id !== id);
    }

    function validate(): boolean {
        form.clearErrors();

        const result = z.array(servicesItemSchema).safeParse(form.services);

        if (!result.success) {
            result.error.issues.forEach((issue) => {
                const fieldName = `services.${issue.path.join('.')}` as keyof typeof form.data;
                form.setError(fieldName, issue.message);
            })

            return false;
        }

        form.services = result.data;

        return true;
    }

    return { form, addServiceItem, postNewItems, removeNewService }
}

