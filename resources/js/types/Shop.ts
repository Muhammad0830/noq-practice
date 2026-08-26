import { Service } from "./Service";

export interface Shop {
    id: number;
    name: string;
    description: string;

    services: Service[];

    created_at?: Date;
    updated_at?: Date;
}

export interface ShopCategory {
    id: string;
    name: string;
    icon: string;
}