import z from "zod";

export const servicesSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    durationMin: z.coerce.number().int().min(1, 'Duration is required'),
    price: z.coerce.number().min(1, 'Price is required'),
    bufferTime: z.coerce.number().int().min(0).nullable().optional(),
    description: z.string().min(0).nullable().optional(),
})

export const servicesInitials = {
    name: '',
    durationMin: 0,
    price: 0,
    bufferTime: null,
    description: '',
}
