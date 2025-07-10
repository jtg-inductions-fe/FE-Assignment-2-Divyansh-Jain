import { IconButtonProps } from '@mui/material';

/**
 * Props for StyledIconButton with support for custom styles.
 */
export type StyledIconButtonProps = IconButtonProps & {
    /** Whether the IconButton should be circular */
    shape?: string;

    /** Elevation level (shadow depth) */
    elevation?: number;

    /** Height of the IconButton (e.g., 40, '2rem') */
    height?: number | string;

    /** Width of the IconButton (e.g., 40, '2rem') */
    width?: number | string;

    /** Padding of the IconButton (e.g., 2, '0.5rem') */
    padding?: number | string;

    /** Overrides the icon color (accepts string like "#000") */
    stringcolor?: string;
};
