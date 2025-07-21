export type CardListItemProps = {
    /** Image source for the avatar (optional) */
    avatarSrc?: string;
    /** Alt text for the avatar image (optional) */
    avatarAlt?: string;
    /** Primary title displayed on the left (bold, black text) */
    title: string;
    /** Subtitle displayed on the left (gray text) */
    subtitle: string;
    /** value to be displayed on the right (bold, black text) */
    value: string;
    /** tooltip title for value */
    valueTooltip?: string;
    /** Subtitle displayed on the right (gray text, optional) */
    label?: string;
    /** Whether to show a bottom divider line */
    showDivider: boolean;
};
