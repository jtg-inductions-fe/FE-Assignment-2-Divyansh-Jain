/**
 * Formats and abbreviates large numbers into readable strings with suffixes.
 *
 * Converts numbers to:
 * - Thousands (e.g., 12,500 → "12.5K")
 * - Millions (e.g., 1,200,000 → "1.2M")
 *
 * Rounds the value to the specified number of decimal places.
 *
 * @param value - The number to format.
 * @param decimal - Number of decimal places to include (default is 2).
 * @returns A formatted string with appropriate abbreviation (e.g., "1.23K", "4.56M").
 */
export function numberFormatter(value: number, decimal: number = 2) {
    if (Math.abs(value) >= 1e6) {
        return `${+(value / 1e6).toFixed(decimal)}M`;
    }
    if (Math.abs(value) >= 1e4) {
        return `${+(value / 1e3).toFixed(decimal)}K`;
    }

    return `${value}`;
}

/**
 * Converts an ISO date string into a human-readable format: `D Mon, YYYY`.
 *
 * Example:
 * ```ts
 * formatToDayMonthYear("2021-04-23T00:00:00Z"); // "23 Apr ,2021"
 * ```
 *
 * @param isoDate - An ISO 8601 formatted date string (e.g., "2021-04-23T00:00:00Z").
 * @returns A formatted date string with the day, short month, and year (e.g., "5 Jul , 2025").
 */
export function formatToDayMonthYear(isoDate: string): string {
    const date = new Date(isoDate);

    const day = date.getUTCDate();
    const shortMonth = date.toLocaleString('en-US', {
        month: 'short',
        timeZone: 'UTC',
    });

    const year = date.getFullYear();

    return `${day} ${shortMonth},${year}`;
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
    const fullDate = formatToDayMonthYear(isoDate);
    return fullDate.split(',')[0];
}
