import { useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List } from '@mui/material';

import { ListItemButton, ListItemIcon, ListItemText } from '@components';

import { CollapsableListItemProps } from './CollapsableListItem.types';

/**
 * A combination of `BaseListItem` and MUI's `Collapse` component,
 * with support for recursive rendering of nested list items.
 */

export const CollapsableListItem = ({
    item,
    renderItems,
}: CollapsableListItemProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ListItemButton key={item.text} onClick={() => setOpen(!open)}>
                <ListItemIcon>{item.Icon && <item.Icon />}</ListItemIcon>
                <ListItemText primary={item.text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div">
                    {item.children && renderItems(item.children)}
                </List>
            </Collapse>
        </>
    );
};
