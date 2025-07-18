import { Chip, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Paper, Typography } from '@components';
import { useTransaction } from '@hooks';

export const Transactions = () => {
    const { transactions } = useTransaction() || {};

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'success';
            case 'IN PROGRESS':
                return 'info';
            case 'CANCELLED':
                return 'error';
        }
    };

    return (
        <Paper component="section">
            <TableContainer sx={{ overflowX: 'auto', minWidth: '768px' }}>
                <Table aria-label="transaction table">
                    <TableHead>
                        <TableRow>
                            {[
                                'Transaction',
                                'DATE & TIME',
                                'AMOUNT',
                                'STATUS',
                            ].map((colName) => (
                                <TableCell key={colName}>{colName}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions?.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap={2}
                                        width="max-content"
                                    >
                                        <Typography variant="body2">
                                            Payment{' '}
                                            {transaction.type === 'REFUND'
                                                ? `Refund to`
                                                : 'from'}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {transaction.type === 'REFUND'
                                                ? transaction.to
                                                : transaction.from}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ width: '30%' }}>
                                    {transaction.dateTime}
                                </TableCell>
                                <TableCell sx={{ width: '30%' }}>
                                    {transaction.amount}
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={transaction.status}
                                        color={getStatusColor(
                                            transaction.status,
                                        )}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
