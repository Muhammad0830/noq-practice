import z from "zod";

export const bookingSchema = z.object({
    shop_id: z.int().min(1, 'Shop id is required'),
    service_id: z.int().min(1, 'Service id is required'),
    date: z.coerce.date('Invalid date value').refine((date) => date.getTime() >= Date.now(), {
        message: 'The date must be in the future',
    }),
});

export type BookingForm = z.infer<typeof bookingSchema>;