export interface UserProps {
    id: string;
    name: string;
    email: string;
    admin: UserAdminProps;
}

interface UserAdminProps {
    id: number;
    shops: AdminShop[]
}

interface AdminShop {
    id: number;
    name: string;
    role: 'staff' | 'owner';
}
