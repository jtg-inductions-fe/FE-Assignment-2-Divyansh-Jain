import { Link } from 'react-router-dom';

import LanguageIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import PreferencesIcon from '@mui/icons-material/Tune';
import { Link as MuiLink, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Drawer } from '@components';
import { ROUTES } from '@routes';

import sidebarLists from './Sidebar.config';
import { renderSidebarLists } from './Sidebar.helper';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ isSidebarMounted }: SidebarProps) => {
    const {
        breakpoints,
        palette: { text },
    } = useTheme();

    const isDesktop = useMediaQuery(breakpoints.up('md'));
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
                        <MuiLink
                            component={Link}
                            to={ROUTES.PREFERENCES}
                            color={text.primary}
                        >
                            <PreferencesIcon />
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to={ROUTES.LANGUAGES}
                            color={text.primary}
                        >
                            <LanguageIcon />
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to={ROUTES.SETTINGS}
                            color={text.primary}
                        >
                            <SettingsIcon />
                        </MuiLink>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    );
};
