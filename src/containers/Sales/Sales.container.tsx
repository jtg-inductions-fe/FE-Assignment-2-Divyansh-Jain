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
import { Paper, Stack, Tooltip, useTheme } from '@mui/material';

import { Typography } from '@components';

import salesData from './Sales.data.json';

const CustomLegend = () => (
    <Stack direction="row" gap={1}>
        <Typography variant="h3">Sales</Typography>
        <Tooltip title="Sales">
            <InfoIcon />
        </Tooltip>
    </Stack>
);

export const Sales = () => {
    const { palette } = useTheme();
    // const [data,setData] = useState<>();
    // useEffect(() => {
    //     if(salesData.statusCode!==200) {
    //         throw Error('Invalid Sales Data')
    //     }
    //     setData(salesData.data)
    // },[salesData])

    return (
        <Paper>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={salesData.data}>
                    <XAxis
                        dataKey="date"
                        padding={{ left: 60 }}
                        strokeWidth={0}
                    />
                    <YAxis dataKey="amt" unit="K" strokeWidth={0} />
                    <ContextCard />
                    <Legend
                        verticalAlign="top"
                        align="left"
                        content={<CustomLegend />}
                    />
                    <CartesianGrid
                        vertical={false}
                        strokeWidth=".3px"
                        x={100}
                    />
                    <Line
                        type="monotone"
                        dataKey="Sales"
                        stroke={palette.primary.main}
                        strokeWidth="4px"
                    />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};
