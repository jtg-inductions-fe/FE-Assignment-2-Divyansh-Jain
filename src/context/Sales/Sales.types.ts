import { TDateISO } from '@types';

export type Sales = {
    /** Date of the sales record e.g `2021-01-08T14:42:34.678Z` (format: ISO 8601).
     * */
    date: TDateISO;

    /** Total amount in revenue or earnings for the given date */
    amount: number;

    /** Number of individual sales made on the given date */
    sales: number;
};
