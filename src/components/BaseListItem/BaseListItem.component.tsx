import { NavLink } from 'react-router-dom';

import { ListItemButton, ListItemIcon, ListItemText } from '@components';
import { SidebarListItem } from '@containers/Sidebar/Sidebar.types';

/**
 * A basic list item structure that supports an optional icon and text label.
 * Serves as the foundation for more advanced sidebar or menu item types.
 */
export const BaseListItem = ({ item }: { item: SidebarListItem }) => (
    <ListItemButton component={NavLink} to={`/${item.text}`} key={item.text}>
        <ListItemIcon color="inherit">
            {item.Icon && <item.Icon />}
        </ListItemIcon>
        <ListItemText primary={item.text} />
    </ListItemButton>
);
