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
