export type Transaction = {
    /** Unique identifier for the transaction */
    id: string | number;
    /**Name of Person Who has recieved payment */
    to?: string;
    /**Name of Person Who has Initiated The Transaction */
    from?: string;
    /**Denotes Type of Transation e.g (DEBIT , CREDIT) */
    type: 'CREDIT' | 'DEBIT';
    /**
     * Denotes the business direction of the transaction.
     *
     * Possible values:
     * - "TRANSFERRED" → Money paid to a vendor or external party
     * - "RECEIVED" → Money received from a customer
     * - "REFUNDED" → Money refunded to a customer
     */
    transactionDirection: 'TRANSFER' | 'RECIEVED' | 'REFUNDED';
    /** Current status of the transaction */
    status: 'CANCELLED' | 'IN PROGRESS' | 'COMPLETED';
    /** Amount involved in the transaction */
    amount: number;
    /** Date and time of the transaction */
    dateTime: string;
};
