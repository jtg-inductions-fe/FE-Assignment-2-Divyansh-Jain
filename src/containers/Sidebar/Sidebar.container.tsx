import { Link } from 'react-router-dom';

import {
    Box,
    Divider,
    Stack,
    Tooltip,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Drawer, List } from '@components';

import { SidebarList } from './Sidebar.config';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ isSidebarMounted }: SidebarProps) => {
    const {
        breakpoints,
        spacing,
        palette: { text },
    } = useTheme();

    const isDesktop = useMediaQuery(breakpoints.up('md'));
    return (
        <Drawer
            open={isSidebarMounted}
            variant={isDesktop ? 'permanent' : 'temporary'}
        >
            <Stack justifyContent="space-between" height="100%">
                <Stack overflow="auto">
                    <List items={SidebarList.primary} />
                    <Divider />
                    <List items={SidebarList.secondary} />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    padding={spacing(1)}
                >
                    {SidebarList.utility.map((item) => (
                        <Tooltip key={item.id} title={item.text}>
                            <Box
                                component={Link}
                                to={item.to || ''}
                                color={text.primary}
                            >
                                {item.Icon && <item.Icon />}
                            </Box>
                        </Tooltip>
                    ))}
                </Stack>
            </Stack>
        </Drawer>
    );
};
