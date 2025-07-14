import { JSX } from 'react';

import { ListItemProps } from '@components/ListItem';

export type CollapsableListItemProps = {
    /**Item which needs to displayed */
    item: ListItemProps;
    /**
     * Function to recursively render child items of the provided item.
     */
    renderItems: (items: ListItemProps[]) => JSX.Element[];
};
