export const DayOfWeekEnum = {
    MONDAY: 'monday',
    TUESDAY: 'tuesday',
    WEDNESDAY: 'wednesday',
    THURSDAY: 'thursday',
    FRIDAY: 'friday',
    SATURDAY: 'saturday',
    SUNDAY: 'sunday',
} as const;

export const schedulingTypeEnum = {
    OPEN: 'open',
    CLOSED: 'closed',
}

export type DayOfWeekItemType =
    typeof DayOfWeekEnum[keyof typeof DayOfWeekEnum]

export type SchedulingType =
    typeof schedulingTypeEnum[keyof typeof schedulingTypeEnum]

export const UserStatusLabels = {
    [DayOfWeekEnum.MONDAY]: 'Monday review',
    [DayOfWeekEnum.TUESDAY]: 'Tuesday review',
    [DayOfWeekEnum.WEDNESDAY]: 'Wednesday preview',
};