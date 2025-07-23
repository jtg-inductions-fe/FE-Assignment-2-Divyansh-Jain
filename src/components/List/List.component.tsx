import { List } from '@mui/material';

import { renderListItems } from './List.helper';
import { ListWrapperProps } from './List.types';

/**
 * A wrapper around MUI's `List` component that renders content based on the provided items.
 * Accepts a list of items and props for ItemButton  as a parameter and handles  rendering of list items within the `List`.
 */
const ListWrapper = ({
    items,
    itemButtonProps,
    ...otherProps
}: ListWrapperProps) => (
    <List {...otherProps}>{renderListItems(items, itemButtonProps)}</List>
);

export { ListWrapper as List };
