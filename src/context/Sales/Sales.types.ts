export type Sales = {
    /** Date of the sales record (e.g., "07 Apr") */
    date: string;

    /** Total amount in revenue or earnings for the given date */
    amt: number;

    /** Number of individual sales made on the given date */
    sales: number;
};
