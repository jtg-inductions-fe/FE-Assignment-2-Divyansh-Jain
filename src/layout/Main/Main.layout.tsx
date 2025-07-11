import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { Header } from '@containers';

const Main = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        setIsSidebarMounted(isDesktop);
    }, [isDesktop]);

    const [isSidebarMounted, setIsSidebarMounted] =
        useState<boolean>(isDesktop);

    /**
     * Toggle's sidebar state for example if isSidebarMounted was true then it will become false after toggleSidebar method is called
     *
     */
    const toggleSidebar = () => {
        setIsSidebarMounted(!isSidebarMounted);
    };

    return (
        <Box height="100vh">
            <Header toggleSidebar={toggleSidebar} />
            <Outlet />
        </Box>
    );
};

export { Main as MainLayout };
