import { List } from '@mui/material';

import { renderListItems } from './List.helper';
import { ListWrapperProps } from './List.types';

/**
 * A wrapper around MUI's `List` component that renders content based on the provided items.
 * Accepts a list of items and toggle method as a parameter and handles their rendering of list items within the `List`.
 */
const ListWrapper = ({
    items,
    toggleSidebar,
    ...otherProps
}: ListWrapperProps) => (
    <List {...otherProps}>{renderListItems(items, toggleSidebar)}</List>
);

export { ListWrapper as List };
