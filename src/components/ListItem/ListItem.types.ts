import { JSX } from 'react';

/**
 * Represents a  list item, which can be a base item, a collapsible item with children,
 * or a countable item displaying a numerical badge.
 */
export type ListItemType = {
    /**Icon to display for item*/
    Icon?: React.ElementType;
    /** The main label or title of the list item. */
    text: string;
    /** Optional count to display as a badge; used with 'Countable' type items. */
    count?: number;
    /**Path for redirection on click */
    to?: string;
    /** Optional nested items; used with 'Collapse' type items to render sub-menus. */
    children?: ListItemType[];
};

export type ListItemProps = {
    /** Optional icon to display alongside the list item text. */
    item: ListItemType;
    /**Method used to render items provided as arguments*/
    renderItems: (items: ListItemType[]) => JSX.Element[];
};
