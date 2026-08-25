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
    open: SchedulingItem[];
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