import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Stack, useTheme } from '@mui/material';

import logo from '@assets/images/Logo.svg';
import { AutoComplete } from '@components';
import { UserProfile } from '@components';
import { IconButton } from '@components';
import { useProduct, useUser } from '@hooks';

import { HeaderProps } from './Header.types';
export const Header = ({ isDesktop, toggleSidebar }: HeaderProps) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { user } = useUser()!;
    useEffect(() => {
        if (!user) {
            throw Error('User does not exists');
        }
    }, [user]);

    const { products } = useProduct()!;

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                px={7}
                py={3}
                alignItems="center"
            >
                {isDesktop ? (
                    <Stack direction="row" spacing={5} alignItems="center">
                        <Link to={'/'}>
                            <img src={logo} alt="Logo" />
                        </Link>
                        <AutoComplete
                            suggestions={products.map(
                                (product) => product.productName,
                            )}
                        />
                    </Stack>
                ) : (
                    <IconButton
                        disableRipple
                        stringcolor={theme.palette.text.primary}
                        onClick={() => toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Stack direction="row" alignItems="center" gap={3}>
                    <IconButton
                        disableRipple
                        elevation={10}
                        shape="circle"
                        height="32px"
                        width="32px"
                        stringcolor={theme.palette.text.primary}
                        onClick={() => {
                            void navigate('/notifications');
                        }}
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <UserProfile user={user} />
                </Stack>
            </Stack>
        </>
    );
};
