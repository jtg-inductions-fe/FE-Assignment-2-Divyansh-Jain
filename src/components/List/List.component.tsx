import { List } from '@mui/material';

import { ListItem } from '@components';
import { ListItemType } from '@components';

import { ListWrapperProps } from './List.types';

/**
 * Renders a list of `items` based on the provided data.
 *
 * @param {ListItemType[]} items - The list of items to render.
 * @returns {JSX.Element[]} An array of rendered `ListItem` components.
 */
function renderListItems(items: ListItemType[]) {
    return items.map((item) => (
        <ListItem
            sx={{ padding: 0 }}
            key={item.id}
            item={item}
            renderItems={renderListItems}
        />
    ));
}

/**
 * A wrapper around MUI's `List` component that renders content based on the provided items.
 * Accepts a list of items as a parameter and handles their rendering within the `List`.
 */
const ListWrapper = ({ items, ...otherProps }: ListWrapperProps) => (
    <List {...otherProps}>{renderListItems(items)}</List>
);

export { ListWrapper as List };
