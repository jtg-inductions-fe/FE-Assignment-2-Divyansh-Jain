import { Chip } from '@mui/material';

import { ListItemButton, ListItemIcon, ListItemText } from '@components';
import { ListItemProps } from '@components/ListItem';
/**
 * An enhanced version of `BaseListItem` that includes a count,
 *  displayed as a chip Useful for representing
 * countable entities like notifications, messages, or tasks.
 */
export const CountableListItem = ({ item }: { item: ListItemProps }) => (
    <ListItemButton key={item.text}>
        <ListItemIcon>{item.Icon && <item.Icon />}</ListItemIcon>
        <ListItemText>{item.text}</ListItemText>
        <Chip
            label={(item.count && (item.count > 99 ? '99+' : item.count)) || 0}
            variant="filled"
            color="error"
        />
    </ListItemButton>
);
