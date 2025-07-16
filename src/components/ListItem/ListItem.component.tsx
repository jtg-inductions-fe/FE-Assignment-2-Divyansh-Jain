import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Chip,
    Collapse,
    List,
    ListItem as StyledListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Tooltip,
} from '@mui/material';

import { ListItemButton, Typography } from '@components';

import { StyledListItemProps } from './ListItem.types';

export const ListItem = ({
    renderItems,
    item,
    ...otherProps
}: StyledListItemProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledListItem {...otherProps}>
                <ListItemButton
                    key={item.text}
                    {...(item.children && {
                        onClick: () => setOpen(!open),
                        'aria-expanded': open,
                        'aria-controls': `nested-${item.id}`,
                    })}
                    {...(item.to && { component: NavLink, to: item.to })}
                >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.Icon && <item.Icon />}
                    </ListItemIcon>
                    <ListItemText color="inherit">
                        <Tooltip title={item.text}>
                            <Typography lines={1}>{item.text}</Typography>
                        </Tooltip>
                    </ListItemText>
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
                </ListItemButton>
            </StyledListItem>
            {item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" id={`nested-${item.id}`}>
                        {item.children && renderItems(item.children)}
                    </List>
                </Collapse>
            )}
        </>
    );
};
