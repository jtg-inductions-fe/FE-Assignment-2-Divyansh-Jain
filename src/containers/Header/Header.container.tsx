import { useEffect, useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider, Stack, useMediaQuery, useTheme } from '@mui/material';

import logo from '@assets/images/Logo.svg';
import { AutoComplete, IconButton, UserProfile } from '@components';
import { Product } from '@context';
import { useProduct, useUser } from '@hooks';
import { ROUTES } from '@routes';
import { debounce } from '@utilities';

import { HeaderProps } from './Header.types';

export const Header = ({ toggleSidebar }: HeaderProps) => {
    const navigate = useNavigate();
    const { palette, breakpoints, zIndex, spacing } = useTheme();

    const userContext = useUser();
    const productContext = useProduct();
    const { user } = userContext || {};
    const options = productContext?.products || [];
    const [searchResults, setSearchResults] = useState<Product[]>(options);
    const isDesktop = useMediaQuery(breakpoints.up('md'));

    useEffect(() => {
        if (!user) {
            throw Error('User does not exists');
        }
        if (!productContext) {
            throw Error('something went wrong');
        }
    }, [user, productContext]);

    /**
     * Retrieves option label from option
     *
     * @param option
     *
     * @returns {string}
     */
    function getOptionLabel(option: unknown) {
        if (typeof option == 'string') return option;
        return (option as Product).productName;
    }

    /**
     * Filters the options based on the current input value
     *
     * @param inputValue current value of input field
     *
     */
    function filterSearch(inputValue: string) {
        const newSearchResults = options.filter((option) =>
            getOptionLabel(option)
                .toLowerCase()
                .includes(inputValue.toLowerCase()),
        );
        setSearchResults(newSearchResults);
    }

    /**
     *
     * Debounced filter search with a delay of 800ms
     *
     * @param inputValue current value of input field
     */
    const debounceFilterSearch = debounce(filterSearch, 800);

    /**
     * Navigates to /products/<product-name> on option selection
     *
     * @param option
     */
    function handleSelection(option: string) {
        void navigate(`${ROUTES.PRODUCTS}/${option}`);
    }

    /**
     *
     * Runs Debounced filter search method on input change
     *
     * @param inputValue current value of input field
     */
    function handleInputChange(inputValue: string) {
        debounceFilterSearch(inputValue);
    }

    /**
     *
     * Navigates to Login Page on click
     *
     */
    const handleLogout = () => {
        void navigate(ROUTES.LOGIN);
    };

    return (
        <Stack
            position="fixed"
            width="100vw"
            zIndex={zIndex.drawer + 1}
            sx={{ backgroundColor: palette.common.white }}
            component="header"
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                py={3}
                px={7}
            >
                {isDesktop ? (
                    <Stack direction="row" spacing={5} alignItems="center">
                        <Link to={ROUTES.HOME}>
                            <Box component="img" src={logo} alt="Logo" />
                        </Link>
                        <AutoComplete
                            options={searchResults}
                            handleInputChange={handleInputChange}
                            handleSelection={handleSelection}
                            placeholder="Search products"
                            getOptionLabel={getOptionLabel}
                            StartIcon={SearchIcon}
                        />
                    </Stack>
                ) : (
                    <IconButton
                        disableTouchRipple
                        customColor={palette.text.primary}
                        onClick={toggleSidebar}
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Stack direction="row" alignItems="center" gap={3}>
                    <Box
                        component={NavLink}
                        to={ROUTES.NOTIFICATIONS}
                        color="text.primary"
                        sx={{
                            '&.active': {
                                color: 'primary.main',
                            },
                        }}
                    >
                        <IconButton
                            disableTouchRipple
                            elevated={isDesktop}
                            shape="circle"
                            color="inherit"
                            padding={spacing(1)}
                            aria-label="notification"
                        >
                            <NotificationsIcon />
                        </IconButton>
                    </Box>
                    {user && (
                        <UserProfile user={user} handleLogout={handleLogout} />
                    )}
                </Stack>
            </Stack>
            <Divider />
        </Stack>
    );
};
