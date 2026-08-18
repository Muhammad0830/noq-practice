import { Service } from "./Service";

export interface Shop {
    id: string;
    name: string;
    description: string;

    services: Service[];

    created_at?: Date;
    updated_at?: Date;
}