import { JSX } from 'react';

import { SidebarListItem } from '@containers/Sidebar/Sidebar.types';

export type CollapsableListItemProps = {
    /**Item which needs to displayed */
    item: SidebarListItem;
    /**
     * Function to recursively render child items of the provided item.
     */
    renderItems: (items: SidebarListItem[]) => JSX.Element[];
};
