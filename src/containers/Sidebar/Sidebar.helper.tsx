import { Divider } from '@mui/material';

import { List, ListItemType } from '@components';

/**
 * Renders multiple item lists with a divider after each list,
 * except after the last one.
 *
 * Useful for visually separating grouped sidebar sections
 */
export function renderSidebarLists(sidebarItemsLists: ListItemType[][]) {
    return sidebarItemsLists.map((itemList, index, arr) => (
        <div key={index}>
            <List items={itemList} />
            {index < arr.length - 1 && <Divider />}
        </div>
    ));
}
