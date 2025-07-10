import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { useMediaQuery, useTheme } from '@mui/material';

import { Header } from '@containers';

const Main = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const [isSidebarMounted, setIsSidebarMounted] =
        useState<boolean>(isDesktop);

    const toggleSidebar = () => {
        setIsSidebarMounted(!isSidebarMounted);
    };

    return (
        <>
            <Header isDesktop={isDesktop} toggleSidebar={toggleSidebar} />
            <Outlet />
        </>
    );
};

export { Main as MainLayout };
