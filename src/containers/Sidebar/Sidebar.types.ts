import { ListItemType } from '@components';

export type SidebarProps = {
    /**
     * Indicates whether the sidebar is currently mounted (visible in the DOM).
     * Typically used to control animation, layout shifts, or conditional rendering.
     */
    isSidebarMounted: boolean;
};

export type SidebarListConfig = {
    primary: ListItemType[];
    secondary: ListItemType[];
    utility: ListItemType[];
};
