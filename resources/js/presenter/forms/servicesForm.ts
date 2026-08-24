import { InertiaForm, useForm, useHttp } from "@inertiajs/vue3";
import { Service } from "@/core/types/Service";
import { toRaw } from "vue";
import { adminServiceEdit } from "@/routes";
import { servicesInitials, servicesItemSchema } from "./schemas/ShopServicesSchema";
import z from "zod";
import { createServices } from "@/actions/App/Http/Controllers/ServicesController";

const servicesScheme = z.object({
    services: z.array(servicesItemSchema)
})

export type UseServicesFormProps = z.infer<typeof servicesScheme>;

export interface UseServicesFormInterface {
    form: InertiaForm<UseServicesFormProps>;
    toggleActive: (serviceId: number, is_active: boolean) => void;
    addServiceItem: () => void;
    postNewItems: (shop_id: number) => void;
    removeNewService: (id: number) => void;
}

export const useServicesForm = (
    initialData?: UseServicesFormProps
): UseServicesFormInterface => {
    const services = toRaw(initialData?.services || [servicesInitials()]).map(service => ({ ...service, is_active: Boolean(service.is_active) }))
    const form = useForm<UseServicesFormProps>({
        services: structuredClone(services)
    })

    function toggleActive(serviceId: number, is_active: boolean): void {
        const service = form.services.find(service => service.id === serviceId);

        if (!service) return;

        service.is_active = is_active;

        form.transform(() => ({
            is_active: is_active,
        })).put(adminServiceEdit({ 'service': serviceId, 'shop': service.shop_id }).url, {
            onError: () => {
                service.is_active = !is_active
            }
        });
    }

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
            .submit(createServices({ shop: 1 }), {
                onSuccess: (e) => {
                    console.log(e.props.flash.message)
                },
                onError: (e: any) => {
                    console.error(e);
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

    return { form, toggleActive, addServiceItem, postNewItems, removeNewService }
}

