import { NavLink } from 'react-router-dom';

import { ListItemButton, ListItemIcon, ListItemText } from '@components';
import { ListItemProps } from '@components/ListItem';

/**
 * A basic list item structure that supports an optional icon and text label.
 * Serves as the foundation for more advanced sidebar or menu item types.
 */
export const BaseListItem = ({ item }: { item: ListItemProps }) => (
    <ListItemButton component={NavLink} to={`/${item.text}`} key={item.text}>
        <ListItemIcon color="inherit">
            {item.Icon && <item.Icon />}
        </ListItemIcon>
        <ListItemText primary={item.text} />
    </ListItemButton>
);
