import { ListItemButtonProps, ListProps } from '@mui/material';

import { ListItemType } from './ListItem';

export type ListWrapperProps = ListProps & {
    /**Items to be rendered */
    items: ListItemType[];
    /**Props for ListItem Button */
    itemButtonProps: ListItemButtonProps;
};
