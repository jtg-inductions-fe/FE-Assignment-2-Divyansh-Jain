import { ListProps } from '@mui/material';

import { ListItemType } from '@components/ListItem/ListItem.types';

export type ListWrapperProps = ListProps & {
    /**Items to be rendered */
    items: ListItemType[];
};
