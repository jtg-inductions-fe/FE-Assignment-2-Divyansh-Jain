import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Drawer } from '@components';

import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ isSidebarMounted }: SidebarProps) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <Drawer
                open={isSidebarMounted}
                variant={isDesktop ? 'permanent' : 'temporary'}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                        (text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ),
                    )}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};
