import { CSSProperties } from 'react';

import { IconButtonProps } from '@mui/material';

/**
 * Props for StyledIconButton with support for custom styles.
 */
export type StyledIconButtonProps = IconButtonProps & {
    /** Whether the IconButton should be circular */
    shape?: 'circle' | 'square';
    /** Boolean property Elevated for Elevation (shadow depth) */
    elevated?: boolean;
    /*
     * CSS padding to apply to the component.
     *
     * Accepts a number (interpreted as pixels) or a string (e.g., "1rem", "10px 20px", "5%")
     *
     */
    padding?: CSSProperties['padding'];
    /** Overrides the icon color (accepts string like "#000") */
    customColor?: string;
};
