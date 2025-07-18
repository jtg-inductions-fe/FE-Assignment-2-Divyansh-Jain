import { numberFormatter } from '@utilities';

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
