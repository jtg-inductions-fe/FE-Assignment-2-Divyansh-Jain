import React, { useEffect, useState } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import {
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Avatar, IconButton, Stack, Typography } from '@components';
import { typography } from '@theme/foundations';

import { Popover as UserProfilePopover } from './Popover';
import { UserProfileProps } from './UserProfile.types';

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const { pxToRem } = typography.typographyUtil;
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
                <Stack py={2} maxWidth={pxToRem(400)}>
                    <Stack alignItems="center" py={4} px={5}>
                        <Avatar alt={user.fullname} src={user.profileUrl} />
                        <Typography lines={1}>{user.fullname}</Typography>
                        <Typography lines={1}>@{user.username}</Typography>
                        <Typography lines={1}>{user.email}</Typography>
                    </Stack>

                    <Divider orientation="horizontal" flexItem />
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="logout" />
                    </ListItemButton>
                </Stack>
            </UserProfilePopover>
        </Stack>
    );
};
