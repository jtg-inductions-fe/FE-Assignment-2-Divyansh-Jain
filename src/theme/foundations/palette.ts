import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    text: {
        primary: '#111827',
        secondary: '#6B7280',
    },
    info: {
        contrastText: '#1E429F',
        main: '#E1EFFE',
    },
    error: {
        main: '#FBD5D5',
        contrastText: '#9B1C1C',
    },
    success: {
        main: '#DEF7EC',
        contrastText: '#03543F',
    },
    background: {
        default: '#F9FAFB',
    },
};
