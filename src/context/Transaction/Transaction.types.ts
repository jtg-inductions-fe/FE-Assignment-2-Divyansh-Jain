export type Transaction = {
    /** Unique identifier for the transaction */
    id: string | number;

    /** Description or title of the transaction */
    transaction: string;

    /** Current status of the transaction */
    status: 'CANCELLED' | 'IN PROGRESS' | 'COMPLETED';

    /** Amount involved in the transaction */
    amount: number;

    /** Date and time of the transaction */
    dateTime: string;
};
