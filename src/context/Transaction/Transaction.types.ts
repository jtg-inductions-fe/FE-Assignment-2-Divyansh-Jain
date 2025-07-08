export type Transaction = {
    id?: string | number;
    transaction: string;
    status: 'CANCELLED' | 'IN PROGRESS' | 'COMPLETED';
    amount: number;
    dateTime: string;
};
