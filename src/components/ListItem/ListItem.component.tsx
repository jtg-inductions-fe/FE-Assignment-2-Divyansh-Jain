import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Chip,
    Collapse,
    List,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@mui/material';

import { ListItemButton, Typography } from '@components';

import { ListItemProps } from './ListItem.types';

export const ListItem = ({ renderItems, item }: ListItemProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ListItemButton
                key={item.text}
                {...(item.children && { onClick: () => setOpen(!open) })}
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
                {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
                {item.count !== undefined && (
                    <Chip
                        label={item.count > 99 ? '99+' : item.count}
                        color="error"
                    />
                )}
            </ListItemButton>
            {item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">
                        {item.children && renderItems(item.children)}
                    </List>
                </Collapse>
            )}
        </>
    );
};
