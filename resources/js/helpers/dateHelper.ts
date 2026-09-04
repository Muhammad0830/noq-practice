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

export const formatDate = (date?: Date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export const getDateOnly = (dateObject: Date) => {
    const year = dateObject.getFullYear()
    const month = String(dateObject.getMonth() + 1).padStart(2, '0')
    const date = String(dateObject.getDate()).padStart(2, '0')

    return `${year}-${month}-${date}`
}

export const getTimeOnly = (dateObject: Date) => {
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`
}

export const getServiceEndTime = (date: Date, durationMin: number) => {
    const endDate = new Date(date);

    endDate.setMinutes(endDate.getMinutes() + durationMin)

    return getTimeOnly(endDate);
}

export function formatAsMonthAndYear(date: Date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })
}