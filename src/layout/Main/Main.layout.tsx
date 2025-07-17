import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Header, Sidebar } from '@containers';

import { StyledBox } from './Main.styles';

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
        <Box>
            <Header toggleSidebar={toggleSidebar} />
            <Stack direction="row">
                <Sidebar isSidebarMounted={isSidebarMounted} />
                <StyledBox>
                    <Outlet />
                </StyledBox>
            </Stack>
        </Box>
    );
};

export { Main as MainLayout };
