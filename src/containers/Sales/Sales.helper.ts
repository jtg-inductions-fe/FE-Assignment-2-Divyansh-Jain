/**
 * Formats the name and value according to custom logic or display preferences.
 */
export function dataFormatter(name: string, value: string) {
    return [name, `$${value}K`];
}
