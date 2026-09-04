import z from "zod";

export const bookingSchema = z.object({
    shop_id: z.int().min(1, 'Shop id is required'),
    service_id: z.int().min(1, 'Service id is required'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
    time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:MM)'),
}).superRefine((data, ctx) => {
    const bookingDateTime = new Date(`${data.date}T${data.time}`);
    const now = new Date();

    if (isNaN(bookingDateTime.getTime())) {
        ctx.addIssue({
            code: 'custom',
            message: "Invalid date or time value",
            path: ["time"],
        });
        return;
    }

    if (bookingDateTime <= now) {
        ctx.addIssue({
            code: 'custom',
            message: "The booking must be in the future",
            path: ["time"],
        });
    }
});

export type BookingForm = z.infer<typeof bookingSchema>;