import { Link } from 'react-router-dom';

import LanguageIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import PreferencesIcon from '@mui/icons-material/Tune';
import { Stack, useMediaQuery } from '@mui/material';

import { Drawer } from '@components';
import { ROUTES } from '@routes';
import { theme } from '@theme';

import sidebarLists from './Sidebar.config';
import { renderSidebarLists } from './Sidebar.helper';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ isSidebarMounted }: SidebarProps) => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <Drawer
                open={isSidebarMounted}
                variant={isDesktop ? 'permanent' : 'temporary'}
            >
                <Stack justifyContent="space-between" height="100%">
                    <Stack overflow="auto">
                        {renderSidebarLists(sidebarLists)}
                    </Stack>
                    <Stack direction="row" justifyContent="space-around">
                        <Link to={ROUTES.PREFERENCES}>
                            <PreferencesIcon />
                        </Link>
                        <Link to={ROUTES.LANGUAGES}>
                            <LanguageIcon />
                        </Link>
                        <Link to={ROUTES.SETTINGS}>
                            <SettingsIcon />
                        </Link>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    );
};
