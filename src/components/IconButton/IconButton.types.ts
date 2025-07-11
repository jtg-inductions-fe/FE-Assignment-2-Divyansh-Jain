import { IconButtonProps } from '@mui/material';

/**
 * Props for StyledIconButton with support for custom styles.
 */
export type StyledIconButtonProps = IconButtonProps & {
    /** Whether the IconButton should be circular */
    shape?: 'circle' | 'square';
    /** Boolean property Elevated for Elevation (shadow depth) */
    elevated?: boolean;
    padding?: number | string;
    /** Overrides the icon color (accepts string like "#000") */
    customcolor?: string;
};
