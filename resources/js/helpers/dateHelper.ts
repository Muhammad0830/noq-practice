const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
]

export function isToday(day: string) {
    const today = daysOfWeek[new Date().getDay()];

    return day === today;
} 