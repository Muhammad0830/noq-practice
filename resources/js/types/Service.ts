export interface Service {
    id: number;
    shop_id: number;
    name: string;
    description: string;
    price: number;
    duration_min: number;
    is_active: boolean;
    buffer_time?: number;

    created_at?: Date;
    updated_at?: Date;
}