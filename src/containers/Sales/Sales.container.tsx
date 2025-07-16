import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip as ContextCard,
    XAxis,
    YAxis,
} from 'recharts';

import { InfoOutlined } from '@mui/icons-material';
import { Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';

import { Paper, Typography } from '@components';

import salesData from './Sales.data.json';

export const Sales = () => {
    const {
        palette,
        breakpoints,
        typography: { pxToRem },
    } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    return (
        <Paper component="section" aria-label="Sales">
            <Stack>
                <Stack direction="row" gap={3} sx={{ px: 4, py: 11 }}>
                    <Typography variant="h2">Sales</Typography>
                    <Tooltip title="Note : This sales data is of year 2024">
                        <InfoOutlined />
                    </Tooltip>
                </Stack>
                <ResponsiveContainer width="90%" height={500}>
                    <LineChart data={salesData.data}>
                        <XAxis
                            dataKey="date"
                            padding={{ left: 60 }}
                            strokeWidth={0}
                            {...(isMobile && {
                                angle: 45,
                                fontSize: 12,
                                fontWeight: 400,
                            })}
                            minTickGap={0}
                        />
                        <YAxis
                            dataKey="amt"
                            unit="K"
                            strokeWidth={0}
                            hide={isMobile}
                        />
                        <ContextCard />
                        <CartesianGrid
                            vertical={false}
                            strokeWidth={pxToRem(0.3)}
                            x={100}
                        />
                        <Line
                            type="monotone"
                            dataKey="Sales"
                            stroke={palette.primary.main}
                            strokeWidth={pxToRem(4)}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
        </Paper>
    );
};
