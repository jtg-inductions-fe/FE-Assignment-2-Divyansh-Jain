// TODO : DJ_A2_00 : Implementation of Dashboard Page

import { Stack, useMediaQuery, useTheme } from '@mui/material';

import { Customers, Hero, Products, Sales, Transactions } from '@containers';

export const Dashboard = () => {
    const { breakpoints } = useTheme();
    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <Stack gap={4}>
            <Hero />
            <Sales />
            <Stack {...(isDesktop && { direction: 'row' })} gap={4}>
                <Customers />
                <Products />
            </Stack>
            <Transactions />
        </Stack>
    );
};
