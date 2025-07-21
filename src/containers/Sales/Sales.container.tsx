import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { InfoOutlined } from '@mui/icons-material';
import {
    Box,
    Stack,
    Tooltip as MuiTooltip,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { ContextCard, Paper, Typography } from '@components';
import { useSales } from '@hooks';
import {
    formatToDayMonth,
    formatToDayMonthYear,
    numberFormatter,
} from '@utilities';

import { dataFormatter } from './Sales.helper';
import { StyledResponsiveContainer } from './Sales.styles';

export const Sales = () => {
    const {
        palette,
        breakpoints,
        typography: { pxToRem, subtitle2 },
    } = useTheme();
    const { data } = useSales() || {};
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    return (
        <Paper component="section" aria-label="Sales">
            <Stack gap={4}>
                <Stack direction="row" gap={3} sx={{ px: 2, py: 4 }}>
                    <Typography variant="h2">Sales</Typography>
                    <MuiTooltip title="Note : This sales data is of year 2025">
                        <Box color={palette.text.secondary}>
                            <InfoOutlined color="inherit" />
                        </Box>
                    </MuiTooltip>
                </Stack>
                <StyledResponsiveContainer width="100%" height={500}>
                    <LineChart data={data} margin={{ right: 40 }}>
                        <XAxis
                            dataKey="date"
                            interval={0}
                            padding={{ left: 60 }}
                            tickFormatter={formatToDayMonth}
                            strokeWidth={0}
                            {...(isMobile && {
                                angle: 45,
                                fontSize: subtitle2.fontSize,
                                fontWeight: subtitle2.fontWeight,
                            })}
                        />
                        <YAxis
                            dataKey="amount"
                            strokeWidth={0}
                            hide={isMobile}
                            tickCount={data?.length}
                            tickFormatter={(value) =>
                                numberFormatter(value as number)
                            }
                        />
                        <Tooltip
                            offset={isMobile ? -45 : -70}
                            allowEscapeViewBox={{ x: true }}
                            content={({ payload, active, label }) => (
                                <ContextCard
                                    active={active}
                                    payload={payload}
                                    xLabel={formatToDayMonthYear(
                                        label as string,
                                    )}
                                    formatter={dataFormatter}
                                />
                            )}
                        />
                        <CartesianGrid
                            vertical={false}
                            strokeWidth={pxToRem(0.3)}
                            x={100}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke={palette.primary.main}
                            strokeWidth={pxToRem(4)}
                        />
                    </LineChart>
                </StyledResponsiveContainer>
            </Stack>
        </Paper>
    );
};
