/**  Formats and abbreviates large numbers (e.g., 1,200 -> 1.2K , 1,000000 -> 1M). */
export function numberFormatter(value: number) {
    if (value >= 1e6) {
        return `${value / 1e6}M`;
    }
    if (value >= 1e3) {
        return `${value / 1e3}K`;
    }

    return `${value}`;
}
