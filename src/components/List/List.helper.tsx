import { ListItem, ListItemType } from '@components/List/ListItem';

/**
 * Renders a list of `items` based on the provided data.
 *
 * @param {ListItemType[]} items - The list of items to render.
 * @param toggleSidebar - Method used to toggle sidebar
 * @returns {JSX.Element[]} An array of rendered `ListItem` components.
 */
export function renderListItems(
    items: ListItemType[],
    toggleSidebar: () => void,
) {
    return items.map((item) => (
        <ListItem
            sx={{ padding: 0 }}
            key={item.id}
            item={item}
            renderItems={renderListItems}
            toggleSidebar={toggleSidebar}
        />
    ));
}
