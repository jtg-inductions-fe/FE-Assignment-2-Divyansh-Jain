// TODO : Implementation of Dashboard Page
import { Box, Button, Typography } from '@mui/material';

import { COLORS } from '@constant';

export const Dashboard = () => (
    <>
        {/* Dummy Content Will be Removed in next PR */}
        <Typography variant="h1" gutterBottom>
            h1. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
            h5. Heading
        </Typography>

        <Box sx={{ color: COLORS.RED['500'] }}>this is box</Box>
        <Button variant="contained">Go back to Home </Button>
    </>
);
