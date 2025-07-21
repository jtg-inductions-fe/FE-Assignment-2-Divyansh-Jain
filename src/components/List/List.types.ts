import { ListProps } from '@mui/material';

import { ListItemType } from './ListItem';

export type ListWrapperProps = ListProps & {
    /**Items to be rendered */
    items: ListItemType[];
    /**Method to toggle Sidebar on Sidebar item click*/
    toggleSidebar: () => void;
};
