import { lazy } from 'react';

import { Stack, useMediaQuery, useTheme } from '@mui/material';

const Customers = lazy(() =>
    import('@containers').then((module) => ({
        default: module.Customers,
    })),
);

const Footer = lazy(() =>
    import('@containers').then((module) => ({ default: module.Footer })),
);
const Hero = lazy(() =>
    import('@containers').then((module) => ({ default: module.Hero })),
);
const Products = lazy(() =>
    import('@containers').then((module) => ({ default: module.Products })),
);
const Sales = lazy(() =>
    import('@containers').then((module) => ({ default: module.Sales })),
);
const Transactions = lazy(() =>
    import('@containers').then((module) => ({ default: module.Transactions })),
);

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
            <Footer />
        </Stack>
    );
};
