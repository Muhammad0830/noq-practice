import z from "zod";

export const servicesItemSchema = z.object({
    id: z.number(),
    shop_id: z.number(),
    name: z.string().min(1, 'Name is required'),
    duration_min: z.preprocess((val) => {
        if (typeof val === 'string' && val.includes(':')) {
            const [hours, minutes] = val.split(':').map(Number);
            return (hours * 60) + minutes;
        }
        return val;
    }, z.number().int().min(1, 'Duration is required')),
    price: z.coerce.number().min(1, 'Price is required'),
    buffer_time: z.preprocess((val) => {
        if (typeof val === 'string' && val.includes(':')) {
            const [hours, minutes] = val.split(':').map(Number);
            return (hours * 60) + minutes;
        }
        return val;
    }, z.number().int().min(0).nullable().optional()),
    description: z.string().min(0).nullable().optional(),
    is_active: z.boolean().default(true),
})

const servicesScheme = z.object({
    services: z.array(servicesItemSchema)
})

export type ServicesCreateFormProps = z.infer<typeof servicesScheme>;

export type ServicesEditFormProps = z.infer<typeof servicesItemSchema>;

export const servicesInitials = () => ({
    id: Math.random(),
    shop_id: Math.random(),
    name: '',
    duration_min: 0,
    price: 0,
    buffer_time: 0,
    description: '',
    is_active: true,
})