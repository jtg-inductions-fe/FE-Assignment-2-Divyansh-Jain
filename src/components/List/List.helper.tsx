import { ListItemButtonProps } from '@mui/material';

import { ListItem, ListItemType } from '@components/List/ListItem';

/**
 * Renders a list of `items` based on the provided data.
 *
 * @param {ListItemType[]} items - The list of items to render.
 * @param itemButtonProps - Props to be passed to ListItemButton
 * @returns {JSX.Element[]} An array of rendered `ListItem` components.
 */
export function renderListItems(
    items: ListItemType[],
    itemButtonProps: ListItemButtonProps,
) {
    return items.map((item) => (
        <ListItem
            sx={{ padding: 0 }}
            key={item.id}
            item={item}
            renderItems={renderListItems}
            itemButtonProps={itemButtonProps}
        />
    ));
}
