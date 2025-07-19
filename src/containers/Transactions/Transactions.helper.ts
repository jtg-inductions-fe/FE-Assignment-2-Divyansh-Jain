import { Transaction } from '@context';

export const getStatusColor = (status: string) => {
    switch (status) {
        case 'COMPLETED':
            return 'success';
        case 'IN PROGRESS':
            return 'info';
        case 'CANCELLED':
            return 'error';
    }
};

export function generateTransactionMessage(transaction: Transaction) {
    if (transaction.status === 'CANCELLED') {
        return 'Payment failed';
    }

    if (transaction.type === 'CREDIT') {
        return 'Payment from';
    }

    if (transaction.type === 'DEBIT') {
        return 'Payment Refund to';
    }
}
