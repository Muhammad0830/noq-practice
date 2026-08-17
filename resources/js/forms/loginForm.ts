import { login } from "@/routes";
import { InertiaForm, useForm } from "@inertiajs/vue3";
import { ref } from "vue";
import z from "zod";

interface UseLoginFormProps {
    form: InertiaForm<LoginForm>,
    error: string;
    submit: () => void,
    validate: () => boolean,
}

export const loginSchema = z.object({
    email: z.email().min(1, 'Email is required'),
    password: z.string().min(8, 'At least 8 characters required').min(1, 'Password is required'),
})

export type LoginForm = z.infer<typeof loginSchema>;

export function useLoginForm(): UseLoginFormProps {
    const error = ref('');

    const form = useForm<LoginForm>({
        email: '',
        password: '',
    })

    function validate(): boolean {
        form.clearErrors();

        const result = loginSchema.safeParse(form.data());

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

        form.submit(login(), {
            onSuccess: () => {
                console.log('succes')
                form.reset()
                error.value = ''
            },
            onError: (e) => {
                console.error(e)
                error.value = e.message
                console.error('error', 'Failed To Login')
            }
        });
    }

    return { form, submit, validate, error: error.value };
}
