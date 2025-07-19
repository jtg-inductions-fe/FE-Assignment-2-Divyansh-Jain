import { Box, Chip, Stack, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import { Paper, Typography } from '@components';
import { useTransaction } from '@hooks';
import { formatToDayMonthYear, numberFormatter, titleCase } from '@utilities';

import { TransactionTableConfig } from './Transactions.config';
import {
    generateTransactionMessage,
    getStatusColor,
} from './Transactions.helper';
import { StyledTableCell, StyledTableRow } from './Transactions.styles';

export const Transactions = () => {
    const { transactions } = useTransaction() || {};
    const { palette, breakpoints } = useTheme();

    return (
        <Paper component="section" aria-label="transaction">
            <Stack gap={4}>
                <Box>
                    <Typography variant="h3">Transactions</Typography>
                    <Typography
                        variant="caption"
                        color={palette.text.secondary}
                    >
                        This is a list of latest transactions.
                    </Typography>
                </Box>
                <TableContainer>
                    <Table
                        sx={{
                            minWidth: breakpoints.values.md,
                            overflow: 'auto',
                            cursor: 'pointer',
                        }}
                        aria-label="transaction"
                    >
                        <TableHead>
                            <StyledTableRow
                                sx={{ background: palette.grey[50] }}
                            >
                                {TransactionTableConfig.map(({ id, name }) => (
                                    <TableCell key={id}>
                                        {name.toUpperCase()}
                                    </TableCell>
                                ))}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {transactions?.map((transaction, index) => (
                                <StyledTableRow key={index} hover>
                                    <StyledTableCell>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            gap={1}
                                            minWidth={0}
                                        >
                                            <Typography
                                                variant="body2"
                                                lines={1}
                                                minWidth={0}
                                            >
                                                {generateTransactionMessage(
                                                    transaction.status,
                                                    transaction.type,
                                                    transaction.transactionDirection,
                                                )}
                                            </Typography>
                                            <Typography
                                                lines={1}
                                                minWidth={0}
                                                variant="body2"
                                            >
                                                {transaction.transactionDirection ===
                                                'RECIEVED'
                                                    ? transaction.from
                                                    : transaction.to}
                                            </Typography>
                                        </Stack>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Typography
                                            variant="caption"
                                            color={palette.text.secondary}
                                        >
                                            {formatToDayMonthYear(
                                                transaction.dateTime,
                                            )}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Typography variant="h4">
                                            {transaction.type === 'DEBIT' &&
                                                '-'}
                                            {`\$${numberFormatter(transaction.amount)}`}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Chip
                                            label={titleCase(
                                                transaction.status,
                                            )}
                                            color={getStatusColor(
                                                transaction.status,
                                            )}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Paper>
    );
};
