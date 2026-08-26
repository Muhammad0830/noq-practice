export const dayOfWeekEnum = {
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
    typeof dayOfWeekEnum[keyof typeof dayOfWeekEnum]

export type SchedulingType =
    typeof schedulingTypeEnum[keyof typeof schedulingTypeEnum]

export const UserStatusLabels = {
    [dayOfWeekEnum.MONDAY]: 'Monday review',
    [dayOfWeekEnum.TUESDAY]: 'Tuesday review',
    [dayOfWeekEnum.WEDNESDAY]: 'Wednesday preview',
};