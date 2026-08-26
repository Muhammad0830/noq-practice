import { SchedulingWeekData } from "@/types/Scheduling";
import { SchedulingForm, schedulingTimeLineInitials } from "../schemas/ShopSchedulingSchema";

export const schedulingWithIsOpen = (scheduling: SchedulingWeekData): SchedulingForm => ({
    scheduling: {
        monday: {
            ...scheduling.monday,
            open: scheduling.monday.open ?? schedulingTimeLineInitials('monday'),
            isOpen: !!scheduling.monday.open,
        },
        tuesday: {
            ...scheduling.tuesday,
            open: scheduling.tuesday.open ?? schedulingTimeLineInitials('tuesday'),
            isOpen: !!scheduling.tuesday.open,
        },
        wednesday: {
            ...scheduling.wednesday,
            open: scheduling.wednesday.open ?? schedulingTimeLineInitials('wednesday'),
            isOpen: !!scheduling.wednesday.open,
        },
        thursday: {
            ...scheduling.thursday,
            open: scheduling.thursday.open ?? schedulingTimeLineInitials('thursday'),
            isOpen: !!scheduling.thursday.open,
        },
        friday: {
            ...scheduling.friday,
            open: scheduling.friday.open ?? schedulingTimeLineInitials('friday'),
            isOpen: !!scheduling.friday.open,
        },
        saturday: {
            ...scheduling.saturday,
            open: scheduling.saturday.open ?? schedulingTimeLineInitials('saturday'),
            isOpen: !!scheduling.saturday.open,
        },
        sunday: {
            ...scheduling.sunday,
            open: scheduling.sunday.open ?? schedulingTimeLineInitials('sunday'),
            isOpen: !!scheduling.sunday.open,
        },
    }
});