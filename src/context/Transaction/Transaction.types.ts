export type Transaction = {
    /** Unique identifier for the transaction */
    id: string | number;
    to?: string;
    from?: string;
    /** Type REFUND OR TRANSFER */
    type: string;
    /** Current status of the transaction */
    status: string;

    /** Amount involved in the transaction */
    amount: string;

    /** Date and time of the transaction */
    dateTime: string;
};
