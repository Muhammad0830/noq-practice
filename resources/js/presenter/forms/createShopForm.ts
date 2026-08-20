import { InertiaForm, useForm } from "@inertiajs/vue3";
import z from "zod";
import { schedulingInitials, schedulingSchema } from "./schemas/ShopSchedulingSchema";
import { servicesInitials, servicesSchema } from "./schemas/ShopServicesSchema";
import { createShop } from "@/actions/App/Http/Controllers/ShopsController";
import { definitionInitials, definitionSchema } from "./schemas/ShopDefinitionSchema";

interface UseCreateShopFormProps {
    form: InertiaForm<CreateShopForm>,
    submit: () => void,
    validateDefinition: () => boolean,
    validateScheduling: () => boolean,
    validateServices: () => boolean,
}

export const createShopSchema = z.object({
    definition: definitionSchema,
    scheduling: schedulingSchema,
    services: z.array(servicesSchema),
})

export type CreateShopForm = z.infer<typeof createShopSchema>;

export function useCreateShopForm(): UseCreateShopFormProps {

    const form = useForm<CreateShopForm>({
        definition: definitionInitials,
        scheduling: schedulingInitials,
        services: [servicesInitials],
    });

    function validateDefinition(): boolean {
        form.clearErrors();

        const result = definitionSchema.safeParse(form.definition);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                const fieldName = `definition.${issue.path.join('.')}` as keyof typeof form.errors;
                form.setError(fieldName, issue.message);
            });

            return false;
        }

        return true;
    }

    function validateScheduling(): boolean {
        form.clearErrors();

        const result = schedulingSchema.safeParse(form.scheduling);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                const fieldName = `scheduling.${issue.path.join('.')}` as keyof typeof form.errors;
                form.setError(fieldName, issue.message);
            });

            return false;
        }

        return true;
    }

    function validateServices(): boolean {
        form.clearErrors();

        const result = z.array(servicesSchema).safeParse(form.services);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                const fieldName = `services.${issue.path.join('.')}` as keyof typeof form.errors;
                form.setError(fieldName, issue.message);
            });

            return false;
        }

        return true;
    }

    function submit(): void {
        if (!validateDefinition || !validateScheduling || !validateServices()) return;

        form.submit(createShop(), {
            onSuccess: () => form.resetAndClearErrors(),
            onError: (e) => console.error('error', 'Failed To Login'),
        })
    }

    return { form, submit, validateDefinition, validateScheduling, validateServices }
}