import { DayOfWeekEnum, DayOfWeekItemType, SchedulingType, schedulingTypeEnum } from "@/core/types/enums/schedulingDayOfWeekEnum";
import z from "zod";

export interface SchedulingTimeLineProps {
    id: string;
    dayOfWeek: DayOfWeekItemType;
    startTime: string;
    endTime: string;
    type: SchedulingType;
}

export interface SchedulingOneDayProps {
    items: SchedulingTimeLineProps[];
    isOpen: boolean;
}

export const schedulingSchema = z.object({
    monday: schedulingOneDaySchema(DayOfWeekEnum.MONDAY),
    tuesday: schedulingOneDaySchema(DayOfWeekEnum.TUESDAY),
    wednesday: schedulingOneDaySchema(DayOfWeekEnum.WEDNESDAY),
    thursday: schedulingOneDaySchema(DayOfWeekEnum.THURSDAY),
    friday: schedulingOneDaySchema(DayOfWeekEnum.FRIDAY),
    saturday: schedulingOneDaySchema(DayOfWeekEnum.SATURDAY),
    sunday: schedulingOneDaySchema(DayOfWeekEnum.SUNDAY),
})

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
        items: z.array(schedulingTimeLineSchema(day)),
        isOpen: z.boolean().default(true),
    });
}

function schedulingTimeLineSchema(day: DayOfWeekItemType) {
    return z.object({
        id: z.uuid().default(() => crypto.randomUUID()),
        dayOfWeek: z.literal(day),
        startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: "Invalid time format, expected HH:MM",
        }),
        endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: "Invalid time format, expected HH:MM",
        }),
        type: z.enum(schedulingTypeEnum),
    })
}

export function schedulingOneDayInitials(
    day: DayOfWeekItemType,
    type?: SchedulingType,
    startTime?: string,
    endTime?: string
): SchedulingOneDayProps {
    return { items: [schedulingTimeLineInitials(day), schedulingTimeLineInitials(day, type, startTime, endTime)], isOpen: true }
}

export function schedulingTimeLineInitials(
    day: DayOfWeekItemType,
    type?: SchedulingType,
    startTime?: string,
    endTime?: string
): SchedulingTimeLineProps {
    return {
        id: crypto.randomUUID(),
        dayOfWeek: day,
        startTime: startTime ?? '09:00',
        endTime: endTime ?? '18:00',
        type: type ?? 'open',
    }
}