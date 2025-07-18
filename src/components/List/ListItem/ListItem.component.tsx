import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Chip,
    Collapse,
    List,
    ListItem as MuiListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Tooltip,
    useTheme,
} from '@mui/material';

import { Typography } from '@components';

import { StyledListItemProps } from './ListItem.types';

export const ListItem = ({
    renderItems,
    item,
    ...otherProps
}: StyledListItemProps) => {
    const { palette } = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <>
            <MuiListItem {...otherProps}>
                <ListItemButton
                    sx={{
                        '&.active': {
                            color: palette.primary.main,
                        },
                    }}
                    {...(item.children && {
                        onClick: () => setOpen(!open),
                        'aria-expanded': open,
                        'aria-controls': `nested-${item.id}`,
                    })}
                    {...(item.to && { component: NavLink, to: item.to })}
                >
                    {item.Icon && (
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <item.Icon />
                        </ListItemIcon>
                    )}

                    <ListItemText color="inherit">
                        <Tooltip title={item.text}>
                            <Typography lines={1}>{item.text}</Typography>
                        </Tooltip>
                    </ListItemText>

                    {item.count || item.children ? (
                        <Stack gap={1} flexDirection="row" alignItems="center">
                            {item.count !== undefined && (
                                <Chip
                                    label={item.count > 99 ? '99+' : item.count}
                                    color="error"
                                />
                            )}
                            {item.children &&
                                item.children.length > 0 &&
                                (open ? <ExpandLess /> : <ExpandMore />)}
                        </Stack>
                    ) : (
                        <></>
                    )}
                </ListItemButton>
            </MuiListItem>
            {item.children && (
                <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    sx={{ paddingLeft: 14 }}
                >
                    <List component="div" id={`nested-${item.id}`}>
                        {item.children && renderItems(item.children)}
                    </List>
                </Collapse>
            )}
        </>
    );
};
