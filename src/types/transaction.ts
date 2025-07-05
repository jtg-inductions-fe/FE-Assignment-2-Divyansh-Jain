import { Status } from '@enums';

export type Transaction = {
    id?: string | number;
    transaction: string;
    status: keyof typeof Status;
    amount: number;
    dateTime: string;
};
