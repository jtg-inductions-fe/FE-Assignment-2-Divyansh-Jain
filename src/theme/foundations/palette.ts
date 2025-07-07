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
        dark: '#1E429F',
        light: '#E1EFFE',
        main: '',
    },
    error: {
        dark: '#9B1C1C',
        light: '#FBD5D5',
        main: '',
    },
    success: {
        light: '#DEF7EC',
        main: '#0E9F6E',
        dark: '#03543F',
        contrastText: '#FFFFFF',
    },
};
