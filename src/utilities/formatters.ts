/**  Formats and abbreviates large numbers (e.g., 10,200 -> 10.2K , 1,000000 -> 1M). */
export function numberFormatter(value: number) {
    if (value >= 1e6) {
        return `${value / 1e6}M`;
    }
    if (value >= 1e4) {
        return `${value / 1e3}K`;
    }

    return `${value}`;
}

/**
 * Converts an ISO date string (e.g., "2024-04-04T00:00:00.000Z") to a formatted string like "04 Apr".
 *
 * @param isoDate - The ISO 8601 date string to format (in UTC or local time).
 * @returns A string in the "DD MMM" format, where:
 *          - DD is the two-digit day (e.g., "04")
 *          - MMM is the 3-letter English month abbreviation (e.g., "Apr")
 *
 * @example
 * formatToDayMonth("2024-04-04T00:00:00.000Z"); // "04 Apr"
 * formatToDayMonth("2024-12-25T00:00:00.000Z"); // "25 Dec"
 */
export function formatToDayMonth(isoDate: string): string {
    const date = new Date(isoDate);

    // Format day and month
    const day = date.getUTCDate().toString().padStart(2, '0');

    // Short month names in English
    const shortMonth = date.toLocaleString('en-US', {
        month: 'short',
        timeZone: 'UTC',
    });

    return `${day} ${shortMonth}`;
}
