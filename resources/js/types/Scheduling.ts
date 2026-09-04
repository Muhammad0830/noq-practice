import { DayOfWeekItemType, SchedulingType } from "@/enums/schedulingDayOfWeekEnum";

export interface SchedulingItem {
    id: number;
    shop_id: number;
    day_of_week: DayOfWeekItemType;
    start_time: string;
    end_time: string;
    type: SchedulingType;

    created_at: Date;
    updated_at: Date;
}

export interface SchedulingDay {
    open: SchedulingItem;
    closed: SchedulingItem[];
}

export interface SchedulingWeekData {
    monday: SchedulingDay;
    tuesday: SchedulingDay;
    wednesday: SchedulingDay;
    thursday: SchedulingDay;
    friday: SchedulingDay;
    saturday: SchedulingDay;
    sunday: SchedulingDay;
}

export interface AvailableTimeProps {
    from: string;
    to: string;
}

export interface StartEndTimeProps {
    start_time: string;
    end_time: string;
}

export interface AvailableTimeDataProps {
    available: AvailableTimeProps[];
    bookings: StartEndTimeProps[];
    breaks: StartEndTimeProps[];
    open_time: string | null;
    close_time: string | null;
}

export interface ScheduleCache {
    data: AvailableTimeDataProps
    fetchedAt: number
}

export interface SelectTimeProps {
    start: string;
    end: string;
}