import { List } from '@mui/material';

import { renderListItems } from './List.helper';
import { ListWrapperProps } from './List.types';

/**
 * A wrapper around MUI's `List` component that renders content based on the provided items.
 * Accepts a list of items as a parameter and handles their rendering within the `List`.
 */
const ListWrapper = ({ items, ...otherProps }: ListWrapperProps) => (
    <List {...otherProps}>{renderListItems(items)}</List>
);

export { ListWrapper as List };
