import { getDateOnly } from "@/helpers/dateHelper";

export const BookingFormInitials = (props: { date: string, shopId: number, serviceId: number }) => {
    const initialDate = new Date(props.date);

    return {
        service_id: props.serviceId,
        shop_id: props.shopId,
        date: getDateOnly(initialDate),
        time: '',
    }
}