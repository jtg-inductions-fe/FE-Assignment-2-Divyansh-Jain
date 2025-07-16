import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip as ContextCard,
    XAxis,
    YAxis,
} from 'recharts';

import InfoIcon from '@mui/icons-material/ShoppingBag';
import { Stack, Tooltip, useTheme } from '@mui/material';

import { Typography } from '@components';

const data = [
    {
        date: '01 Apr',
        Sales: 80,
        amt: 0,
    },
    {
        date: '02 Apr',
        Sales: 90,
        amt: 40,
    },
    {
        date: '03 Apr',
        Sales: 85,
        amt: 80,
    },
    {
        date: '04 Apr',
        Sales: 90,
        amt: 120,
    },
    {
        date: '05 Apr',
        Sales: 75,
        amt: 160,
    },
    {
        date: '06 Apr',
        Sales: 95,
        amt: 200,
    },
    {
        date: '07 Apr',
        Sales: 80,
        amt: 240,
    },
];

export const Sales = () => {
    const { palette } = useTheme();

    return (
        <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
                <XAxis dataKey="date" padding={{ left: 60 }} strokeWidth={0} />
                <YAxis dataKey="amt" unit="K" strokeWidth={0} />
                <ContextCard />
                <Legend
                    content={
                        <Stack alignItems="center" direction="row" spacing={3}>
                            <Typography variant="h3">Sales</Typography>
                            <Tooltip title="this tootltop title">
                                <InfoIcon />
                            </Tooltip>
                        </Stack>
                    }
                />
                <CartesianGrid vertical={false} strokeWidth=".3px" x={100} />
                <Line
                    type="monotone"
                    dataKey="Sales"
                    stroke={palette.primary.main}
                    strokeWidth="4px"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
