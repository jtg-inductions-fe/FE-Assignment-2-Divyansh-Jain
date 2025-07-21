import {
    Box,
    Chip,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Tooltip,
    useTheme,
} from '@mui/material';

import { Paper, Typography } from '@components';
import { useTransaction } from '@hooks';
import {
    formatToDayMonthYear,
    formatWithComma,
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
                                {transactions.map((transaction) => {
                                    const transactionMessage =
                                        generateTransactionMessage(
                                            transaction.transactionStatus,
                                            transaction.transactionType,
                                            transaction.transactionDirection,
                                        );

                                    const transactionAmountSign =
                                        transaction.transactionType === 'DEBIT'
                                            ? '-'
                                            : '';

                                    const otherParty =
                                        transaction.transactionDirection ===
                                        'RECEIVED'
                                            ? transaction.from
                                            : transaction.to;

                                    return (
                                        <StyledTableRow
                                            key={transaction.id}
                                            hover
                                        >
                                            <StyledTableCell
                                                sx={{
                                                    minWidth: {
                                                        xs: pxToRem(200),
                                                        sm: pxToRem(400),
                                                    },
                                                    width: {
                                                        xs: '10%',
                                                        sm: '30%',
                                                    },
                                                    maxWidth: {
                                                        xs: pxToRem(225),
                                                        sm: pxToRem(600),
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant="caption"
                                                    noWrap
                                                    minWidth={0}
                                                    display="inline-block"
                                                >
                                                    {transactionMessage}
                                                </Typography>
                                                &nbsp;
                                                <Tooltip title={otherParty}>
                                                    <Typography
                                                        noWrap
                                                        minWidth={0}
                                                        variant="body2"
                                                        display="inline-block"
                                                        sx={{
                                                            maxWidth: {
                                                                xs: '50%',
                                                                sm: '80%',
                                                            },
                                                        }}
                                                    >
                                                        {otherParty}
                                                    </Typography>
                                                </Tooltip>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <Typography
                                                    variant="caption"
                                                    color={
                                                        palette.text.secondary
                                                    }
                                                >
                                                    {formatToDayMonthYear(
                                                        transaction.dateTime,
                                                    )}
                                                </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <Tooltip
                                                    title={
                                                        transactionAmountSign +
                                                        '$' +
                                                        formatWithComma(
                                                            transaction.amount,
                                                        )
                                                    }
                                                >
                                                    <Typography variant="h4">
                                                        {transactionAmountSign +
                                                            `\$${numberFormatter(transaction.amount, { commas: true })}`}
                                                    </Typography>
                                                </Tooltip>
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
                                    );
                                })}
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
