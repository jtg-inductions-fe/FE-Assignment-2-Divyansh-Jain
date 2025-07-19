/**
 * Maps a transaction `status` to a corresponding color keyword.
 *
 * @param status - The status of the transaction:
 *   - "COMPLETED" → "success"
 *   - "CANCELLED" → "error"
 *   - "IN PROGRESS" → "info"
 *
 * @returns A string representing the color category.
 */

import {
    TransactionDirection,
    TransactionStatus,
    TransactionType,
} from '@context';

export const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
        case 'COMPLETED':
            return 'success';
        case 'IN PROGRESS':
            return 'info';
        case 'CANCELLED':
            return 'error';
    }
};

/**
 * Generates a transaction message based on the transaction `status`, `type`, and `direction`.
 *
 * @param status - The status of the transaction (e.g., "COMPLETED", "CANCELLED", "IN PROGRESS").
 * @param type - The type of the transaction (e.g., "CREDIT" or "DEBIT").
 * @param transactionDirection - Indicates the business direction of the transaction:
 *   - "RECEIVED" → Money received from customer
 *   - "REFUNDED" → Money refunded to customer
 *   - "TRANSFERRED" → Money paid to someone (e.g., vendor)
 *
 * @returns A user-friendly message string describing the transaction.
 *
 * Example messages:
 * - "Payment failed"
 * - "Payment from"
 * - "Payment refund to"
 * - "Paid to"
 */
export function generateTransactionMessage(
    status: TransactionStatus,
    type: TransactionType,
    transactionDirection: TransactionDirection,
) {
    if (status === 'CANCELLED') {
        return 'Payment failed';
    }

    if (type === 'CREDIT' && transactionDirection === 'RECEIVED') {
        return 'Payment from';
    }

    if (type === 'DEBIT') {
        if (transactionDirection === 'REFUNDED') return 'Payment Refund to';

        if (transactionDirection === 'TRANSFERRED') return 'Paid to';
    }
}
