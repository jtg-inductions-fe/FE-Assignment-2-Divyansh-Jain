import React, { useEffect, useState } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import {
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Tooltip,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Avatar, IconButton, Typography } from '@components';

import { Popover as UserProfilePopover } from './Popover';
import { UserProfileProps } from './UserProfile.types';

export const UserProfile: React.FC<UserProfileProps> = ({
    user,
    handleLogout,
}) => {
    const {
        breakpoints,
        typography: { pxToRem },
    } = useTheme();
    const isDesktop = useMediaQuery(breakpoints.up('md'));
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (
            !user.email.trim() ||
            !user.fullname.trim() ||
            !user.username.trim()
        ) {
            throw Error('Invalid User');
        }
    }, [user]);

    /**
     * Sets the event target as the anchor element for the Popover
     *
     * @param event provides the target element
     *
     */
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     *
     * Sets the Popover anchor to null
     *
     */
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Stack direction="row" justifyContent="end" spacing={2}>
            <IconButton
                onClick={handleClick}
                disableRipple
                elevated={isDesktop}
                padding={0}
                shape="circle"
                sx={{
                    '&:focus': {
                        outline: 4,
                    },
                }}
            >
                <Avatar alt={user.fullname} src={user.profileUrl} />
            </IconButton>
            <UserProfilePopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Stack py={2} width={pxToRem(300)}>
                    <Stack py={4} px={5} gap={2}>
                        <Avatar
                            alt={user.fullname}
                            src={user.profileUrl}
                            size="lg"
                            sx={{ alignSelf: 'center' }}
                        />
                        <Stack alignItems="center">
                            <Tooltip title={user.fullname}>
                                <Typography
                                    variant="h3"
                                    lines={1}
                                    maxWidth="95%"
                                >
                                    {user.fullname}
                                </Typography>
                            </Tooltip>
                            <Tooltip title={user.username}>
                                <Typography
                                    variant="subtitle1"
                                    lines={1}
                                    maxWidth="95%"
                                >
                                    @{user.username}
                                </Typography>
                            </Tooltip>
                            <Tooltip title={user.email}>
                                <Typography
                                    variant="caption"
                                    lines={1}
                                    color="text.secondary"
                                    maxWidth="95%"
                                >
                                    {user.email}
                                </Typography>
                            </Tooltip>
                        </Stack>
                    </Stack>

                    <Divider orientation="horizontal" flexItem />
                    <ListItemButton
                        onClick={() => {
                            handleClose();
                            handleLogout();
                        }}
                        sx={{ gap: 2 }}
                    >
                        <ListItemIcon sx={{ minWidth: 0 }}>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </Stack>
            </UserProfilePopover>
        </Stack>
    );
};
