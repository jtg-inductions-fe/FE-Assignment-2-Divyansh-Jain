import React, { useEffect, useState } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { Typography } from '@components';
import { IconButton } from '@components/IconButton';

import { UserProfileProps } from './UserProfile.types';
import { UserProfilePopover } from './UserProfilePopover';

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    useEffect(() => {
        if (!user.email || !user.fullname || !user.username) {
            throw Error('Invalid User');
        }
    }, [user]);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

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
                elevation={5}
                shape="circle"
                padding={0}
                height="32px"
                width="32px"
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
                <Stack py={2}>
                    <Stack alignItems="center" py={4} px={5}>
                        <Avatar alt={user.fullname} src={user.profileUrl} />
                        <Typography>{user.fullname}</Typography>
                        <Typography>@{user.username}</Typography>
                        <Typography>{user.email}</Typography>
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
