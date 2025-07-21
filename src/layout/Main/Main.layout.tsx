import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { Header, Sidebar } from '@containers';

import { StyledBox } from './Main.styles';

const Main = () => {
    const [isSidebarMounted, setIsSidebarMounted] = useState<boolean>(false);

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
            <Stack direction="row" justifyContent="center">
                <Sidebar
                    isSidebarMounted={isSidebarMounted}
                    toggleSidebar={toggleSidebar}
                />
                <StyledBox>
                    <Outlet />
                </StyledBox>
            </Stack>
        </Box>
    );
};

export { Main as MainLayout };
