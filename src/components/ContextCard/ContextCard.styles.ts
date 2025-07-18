import { Box, styled } from '@mui/material';

export const StyledContextCard = styled(Box)(
    ({
        theme: {
            spacing,
            typography: { pxToRem },
            palette,
            breakpoints,
        },
    }) => ({
        padding: spacing(2, 4),

        [breakpoints.down('sm')]: {
            padding: spacing(4, 6),
        },
        borderRadius: pxToRem(12),
        background: palette.common.white,
        filter: `drop-shadow(0 2px 2px  ${palette.grey[400]})`,

        '.active-circle': {
            backgroundColor: palette.primary.main,
            borderRadius: '50%',
            height: pxToRem(10),
            width: pxToRem(10),
        },

        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translate(-50%,80%)',
            width: 0,
            height: 0,
            borderLeft: `${pxToRem(16)} solid transparent`,
            borderRight: `${pxToRem(16)} solid transparent`,
            borderTop: `${pxToRem(12)} solid ${palette.common.white}`,
        },
    }),
);
