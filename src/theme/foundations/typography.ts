import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(45),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(62.5),
        },
    },
    h2: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 700,
    },
    h3: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 600,
    },
    h4: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 500,
    },
    body1: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 400,
    },
    body2: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
    },
    subtitle2: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
    },
    button: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
    },
});

export const typography = { typographyStyle, typographyUtil };
