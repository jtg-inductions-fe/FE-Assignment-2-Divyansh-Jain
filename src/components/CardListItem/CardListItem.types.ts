export type CardListItemProps = {
    /** Image source for the avatar (optional) */
    avatarSrc?: string;

    /** Alt text for the avatar image (optional) */
    avatarAlt?: string;

    /** Primary title displayed on the left (bold, black text) */
    leftTitle: string;

    /** Subtitle displayed on the left (gray text) */
    leftSubtitle: string;

    /** Primary title displayed on the right (bold, black text) */
    rightTitle: string;

    /** Subtitle displayed on the right (gray text, optional) */
    rightSubtitle?: string;

    /** Whether to show a bottom divider line */
    showDivider: boolean;
};
