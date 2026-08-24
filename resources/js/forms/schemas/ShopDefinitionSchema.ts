import z from "zod";

export const definitionSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    category: z.coerce.number().min(1, 'Category is required'),
    description: z.string().optional(),
    address: z.string().min(1, 'Address is required'),
    phone: z.string().min(1, 'Phone Number is reqeuired'),
})

export const definitionInitials = {
    name: '',
    category: 0,
    description: '',
    address: '',
    phone: '',
}