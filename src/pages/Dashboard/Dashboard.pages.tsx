// TODO : DJ_A2_00 : Implementation of Dashboard Page
import { Button, Typography } from '@mui/material';

import { Typography as CustomTypography } from '@components';

export const Dashboard = () => (
    <>
        {/* Dummy Content Will be Removed in next PR */}
        <Typography variant="h1" gutterBottom>
            h1. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
            h5. Heading
        </Typography>
        <CustomTypography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium beatae dignissimos vel, vitae at, nemo amet natus
            laboriosam, ex consectetur sapiente autem quaerat! Rem et iste at
            delectus. Neque, reprehenderit!
        </CustomTypography>
        <Button variant="contained">Go back to Home </Button>
    </>
);
