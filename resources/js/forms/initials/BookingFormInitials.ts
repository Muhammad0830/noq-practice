export const BookingFormInitials = (date: string) => {
    const initialDate = new Date(date);

    initialDate.setHours(0, 0, 0, 0)

    return {
        service_id: 0,
        shop_id: 0,
        date: initialDate,
    }
}