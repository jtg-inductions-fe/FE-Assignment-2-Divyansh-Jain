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
    rightTitle: string | number;

    /** Subtitle displayed on the right (gray text, optional) */
    rightSubtitle?: string;

    /**Method to format number accordingly
     *
     * @param value number to be formatted
     *
     * @return {string} returns the formatted in number in form of string
     *
     */
    numberFormatter?: (value: number) => string;
    /** Whether to show a bottom divider line */
    showDivider: boolean;
};
