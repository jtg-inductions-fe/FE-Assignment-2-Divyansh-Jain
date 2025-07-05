import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    info: {
        main: COLORS.BLUE['800'] ?? '#3F83F8',
        contrastText: COLORS.BLUE['800'],
        light: COLORS.BLUE['100'],
    },
    error: {
        main: COLORS.RED['500'] ?? '#F05252',
        contrastText: COLORS.RED['800'],
        light: COLORS.RED['200'],
    },
    success: {
        main: COLORS.GREEN['500'] ?? '#0E9F6E',
        light: COLORS.GREEN['100'],
        contrastText: COLORS.GREEN['800'],
    },
};
