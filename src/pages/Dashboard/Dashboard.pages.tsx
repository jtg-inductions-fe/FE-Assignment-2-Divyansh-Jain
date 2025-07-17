// TODO : DJ_A2_00 : Implementation of Dashboard Page

import { Stack } from '@mui/material';

import { Customers, Hero, Products, Sales } from '@containers';

export const Dashboard = () => (
    <Stack gap={4}>
        <Hero />
        <Sales />
        <Stack direction="row" gap={4}>
            <Customers />
            <Products />
        </Stack>
    </Stack>
);
