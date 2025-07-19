import { Box, Chip, Stack, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Paper, Typography } from '@components';
import { useTransaction } from '@hooks';
import { numberFormatter } from '@utilities';

import {
    generateTransactionMessage,
    getStatusColor,
} from './Transactions.helper';

export const Transactions = () => {
    const { transactions } = useTransaction() || {};
    const { palette, breakpoints } = useTheme();

    return (
        <Paper component="section" aria-label="transaction">
            <Stack gap={4}>
                <Box>
                    <Typography variant="h3">Transactions</Typography>
                    <Typography variant="body2" color={palette.text.secondary}>
                        This is a list of latest transactions.
                    </Typography>
                </Box>
                <TableContainer>
                    <Table
                        size="small"
                        sx={{
                            minWidth: breakpoints.values.md,
                            overflow: 'auto',
                            cursor: 'pointer',
                        }}
                        aria-label="transaction"
                    >
                        <TableHead>
                            <TableRow sx={{ background: palette.grey[50] }}>
                                {[
                                    'TRANSACTION',
                                    'DATE & TIME',
                                    'AMOUNT',
                                    'STATUS',
                                ].map((colName) => (
                                    <TableCell key={colName}>
                                        {colName}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions?.map((transaction, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        backgroundColor:
                                            index & 1 && palette.grey[50],
                                    }}
                                    hover
                                >
                                    <TableCell sx={{ maxWidth: '80%' }}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            gap={2}
                                            minWidth={0}
                                        >
                                            <Typography
                                                variant="body2"
                                                lines={1}
                                                minWidth={0}
                                            >
                                                {generateTransactionMessage(
                                                    transaction,
                                                )}
                                            </Typography>
                                            <Typography lines={1} minWidth={0}>
                                                {transaction.type === 'CREDIT'
                                                    ? transaction.from
                                                    : transaction.to}
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            color={palette.text.secondary}
                                        >
                                            {transaction.dateTime}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {transaction.type === 'DEBIT' && '-'}
                                        {`\$${numberFormatter(transaction.amount)}`}
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
            </Stack>
        </Paper>
    );
};
