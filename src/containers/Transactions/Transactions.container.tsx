import { Box, Chip, Stack, useTheme } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import { Paper, Typography } from '@components';
import { useTransaction } from '@hooks';
import {
    formatToDayMonthYear,
    numberFormatter,
    sentenceCase,
} from '@utilities';

import { STATUS_COLOR_MAP } from './Transaction.constants';
import { TransactionTableConfig } from './Transactions.config';
import { generateTransactionMessage } from './Transactions.helper';
import {
    StyledTable,
    StyledTableCell,
    StyledTableRow,
} from './Transactions.styles';

export const Transactions = () => {
    const { transactions } = useTransaction() || {};
    const {
        palette,
        typography: { pxToRem },
    } = useTheme();

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
                {transactions && transactions.length > 0 ? (
                    <TableContainer sx={{ borderRadius: pxToRem(12) }}>
                        <StyledTable aria-label="transaction">
                            <TableHead>
                                <StyledTableRow
                                    sx={{ background: palette.grey[50] }}
                                >
                                    {TransactionTableConfig.map(
                                        ({ id, name }) => (
                                            <TableCell key={id}>
                                                <Typography
                                                    variant="body2"
                                                    color={
                                                        palette.text.secondary
                                                    }
                                                >
                                                    {name.toUpperCase()}
                                                </Typography>
                                            </TableCell>
                                        ),
                                    )}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((transaction) => (
                                    <StyledTableRow key={transaction.id} hover>
                                        <StyledTableCell
                                            sx={{
                                                width: pxToRem(500),
                                                maxWidth: pxToRem(500),
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                noWrap
                                                minWidth={0}
                                                display="inline-block"
                                            >
                                                {generateTransactionMessage(
                                                    transaction.transactionStatus,
                                                    transaction.transactionType,
                                                    transaction.transactionDirection,
                                                )}
                                            </Typography>
                                            &nbsp;
                                            <Typography
                                                noWrap
                                                minWidth={0}
                                                variant="body2"
                                                display="inline-block"
                                                maxWidth="70%"
                                            >
                                                {transaction.transactionDirection ===
                                                'RECEIVED'
                                                    ? transaction.from
                                                    : transaction.to}
                                            </Typography>
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
                                                {transaction.transactionType ===
                                                    'DEBIT' && '-'}
                                                {`\$${numberFormatter(transaction.amount, { commas: true })}`}
                                            </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Chip
                                                label={sentenceCase(
                                                    transaction.transactionStatus,
                                                )}
                                                sx={(theme) => ({
                                                    ...theme.typography
                                                        .subtitle2,
                                                })}
                                                color={
                                                    STATUS_COLOR_MAP[
                                                        transaction
                                                            .transactionStatus
                                                    ]
                                                }
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </StyledTable>
                    </TableContainer>
                ) : (
                    <Box>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            align="center"
                        >
                            No transactions yet!
                        </Typography>
                    </Box>
                )}
            </Stack>
        </Paper>
    );
};
