import { dayOfWeekEnum, DayOfWeekItemType, SchedulingType, schedulingTypeEnum } from "@/enums/schedulingDayOfWeekEnum";
import z from "zod";

export interface SchedulingTimeLineProps {
    id: number;
    shop_id: number;
    day_of_week: DayOfWeekItemType;
    start_time: string;
    end_time: string;
    type: SchedulingType;
}

export interface SchedulingOneDayProps {
    open: SchedulingTimeLineProps;
    closed: SchedulingTimeLineProps[];
    isOpen: boolean;
}

export const schedulingSchema = z.object({
    monday: schedulingOneDaySchema(dayOfWeekEnum.MONDAY),
    tuesday: schedulingOneDaySchema(dayOfWeekEnum.TUESDAY),
    wednesday: schedulingOneDaySchema(dayOfWeekEnum.WEDNESDAY),
    thursday: schedulingOneDaySchema(dayOfWeekEnum.THURSDAY),
    friday: schedulingOneDaySchema(dayOfWeekEnum.FRIDAY),
    saturday: schedulingOneDaySchema(dayOfWeekEnum.SATURDAY),
    sunday: schedulingOneDaySchema(dayOfWeekEnum.SUNDAY),
})

const schedulingObjectSchema = z.object({ scheduling: schedulingSchema });

export type SchedulingForm = z.infer<typeof schedulingObjectSchema>

export const schedulingInitials = {
    monday: schedulingOneDayInitials('monday', 'closed', '13:00', '14:00'),
    tuesday: schedulingOneDayInitials('tuesday', 'closed', '13:00', '14:00'),
    wednesday: schedulingOneDayInitials('wednesday', 'closed', '13:00', '14:00'),
    thursday: schedulingOneDayInitials('thursday', 'closed', '13:00', '14:00'),
    friday: schedulingOneDayInitials('friday', 'closed', '13:00', '14:00'),
    saturday: schedulingOneDayInitials('saturday', 'closed', '13:00', '14:00'),
    sunday: schedulingOneDayInitials('sunday', 'closed', '13:00', '14:00'),
}

function schedulingOneDaySchema(day: DayOfWeekItemType) {
    return z.object({
        open: schedulingTimeLineSchema(day),
        closed: z.array(schedulingTimeLineSchema(day)),
        isOpen: z.boolean().default(true),
    });
}

function schedulingTimeLineSchema(day: DayOfWeekItemType) {
    return z.object({
        id: z.int(),
        shop_id: z.int(),
        day_of_week: z.literal(day),
        start_time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: "Invalid time format, expected HH:MM",
        }),
        end_time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: "Invalid time format, expected HH:MM",
        }),
        type: z.enum(schedulingTypeEnum),
    })
}

export function schedulingOneDayInitials(
    day: DayOfWeekItemType,
    type?: SchedulingType,
    start_time?: string,
    end_time?: string
): SchedulingOneDayProps {
    return {
        open: schedulingTimeLineInitials(day),
        closed: [schedulingTimeLineInitials(day, type, start_time, end_time)],
        isOpen: true
    }
}

export function schedulingTimeLineInitials(
    day: DayOfWeekItemType,
    type?: SchedulingType,
    start_time?: string,
    end_time?: string
): SchedulingTimeLineProps {
    return {
        id: Math.floor(Math.random() * 100) * 99999,
        shop_id: Math.floor(Math.random() * 100) * 99999,
        day_of_week: day,
        start_time: start_time ?? '09:00',
        end_time: end_time ?? '18:00',
        type: type ?? 'open',
    };
}