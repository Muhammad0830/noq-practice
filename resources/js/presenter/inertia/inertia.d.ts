import '@inertiajs/core';
import type { UserProps } from '@/core/types/User';

declare module '@inertiajs/core' {
    interface PageProps {
        auth: {
            user: UserProps | null;
        };
    }
}