/**  Formats and abbreviates large numbers (e.g., 1,200 -> 1.2K , 1,000000 -> 1M). */
export function numberFormatter(value: number) {
    if (value >= 1e6) {
        return `${value / 1e5}M`;
    }
    if (value >= 1e3) {
        return `${value / 1e3}K`;
    }

    return `${value}`;
}

/**
 * Formats the name and value according to custom logic or display preferences.
 */
export function dataFormatter(name: string, value: string | number) {
    if (typeof value === 'string') {
        return {
            name,
            value: `$${value}`,
        };
    }

    return {
        name,
        value: `$${numberFormatter(value)}`,
    };
}
