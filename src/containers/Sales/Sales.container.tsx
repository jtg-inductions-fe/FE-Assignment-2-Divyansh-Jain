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

import { Paper, ResponsiveContainer, Typography } from '@components';
import { ContextCard } from '@components/ContextCard';
import { useSales } from '@hooks';

import { dataFormatter } from './Sales.helper';

export const Sales = () => {
    const {
        palette,
        breakpoints,
        typography: { pxToRem },
    } = useTheme();

    const { data } = useSales() || {};
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    return (
        <Paper component="section" aria-label="Sales">
            <Stack>
                <Stack direction="row" gap={3} sx={{ px: 4, py: 11 }}>
                    <Typography variant="h2">Sales</Typography>
                    <MuiTooltip title="Note : This sales data is of year 2024">
                        <Box color={palette.text.secondary}>
                            <InfoOutlined color="inherit" />
                        </Box>
                    </MuiTooltip>
                </Stack>
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart data={data} margin={{ right: 40 }}>
                        <XAxis
                            dataKey="date"
                            interval={0}
                            padding={{ left: 60 }}
                            strokeWidth={0}
                            {...(isMobile && {
                                angle: 45,
                                fontSize: 12,
                                fontWeight: 400,
                            })}
                        />
                        <YAxis
                            dataKey="amt"
                            unit="K"
                            strokeWidth={0}
                            hide={isMobile}
                        />
                        <Tooltip
                            offset={-78}
                            content={({ payload, active, label }) => (
                                <ContextCard
                                    active={active}
                                    payload={payload}
                                    label={label}
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
                </ResponsiveContainer>
            </Stack>
        </Paper>
    );
};
