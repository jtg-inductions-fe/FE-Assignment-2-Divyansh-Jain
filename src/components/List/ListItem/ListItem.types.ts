import { JSX } from 'react';

import { To } from 'react-router-dom';

import { ListItemProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
/**
 * Represents a  list item, which can be a base item, a collapsible item with children,
 * or a countable item displaying a numerical badge.
 */
export type ListItemType = {
    /**Unique identifier */
    id: string | number;
    /**Icon to display for item*/
    Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
    /** The main label or title of the list item. */
    text: string;
    /** Optional count to display as a badge; used with 'Countable' type items. */
    count?: number;
    /**Path for redirection on click */
    to?: To;
    /** Optional nested items; used with 'Collapse' type items to render sub-menus. */
    children?: ListItemType[];
};

export type StyledListItemProps = ListItemProps & {
    /**Item to be displayed */
    item: ListItemType;
    /**Method used to render items provided as arguments*/
    renderItems: (items: ListItemType[]) => JSX.Element[];
};
