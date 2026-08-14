import { register } from "@/actions/App/Http/Controllers/AuthController";
import { InertiaForm, useForm } from "@inertiajs/vue3";
import z from "zod";

interface UseRegisterFormProps {
    form: InertiaForm<RegisterForm>,
    submit: () => void,
    validate: () => boolean,
}

export const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email().min(1, 'Email is required'),
    password: z.string().min(8, 'At least 8 characters required').min(1, 'Password is required'),
})

export type RegisterForm = z.infer<typeof registerSchema>;

export function useRegisterForm(): UseRegisterFormProps {
    const form = useForm<RegisterForm>({
        name: '',
        email: '',
        password: '',
    })

    function validate(): boolean {
        form.clearErrors();

        const result = registerSchema.safeParse(form.data());

        if (!result.success) {
            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof typeof form.data;
                form.setError(fieldName, issue.message);
            })


            return false;
        }
        return true;
    }

    function submit(): void {
        if (!validate()) return;

        form.submit(register(), {
            onSuccess: () => form.reset(),
            onError: () => console.error('error', 'Failed To Register')
        });
    }

    return { form, submit, validate };
}
