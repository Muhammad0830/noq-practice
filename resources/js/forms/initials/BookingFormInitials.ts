export const BookingFormInitials = () => {
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);

    return {
        service_id: 0,
        shop_id: 0,
        date: newDate,
    }
}