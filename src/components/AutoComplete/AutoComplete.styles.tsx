import {
    Autocomplete,
    inputBaseClasses,
    outlinedInputClasses,
    paperClasses,
    styled,
} from '@mui/material';
import popperClasses from '@mui/material/Popper/popperClasses';

export const StyledAutocomplete = styled(Autocomplete)(
    ({
        theme: {
            shadows,
            spacing,
            typography: { pxToRem },
        },
    }) => ({
        width: '25vw',

        [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: 'none',
            borderRadius: pxToRem(16),
            boxShadow: shadows[4],
        },

        [`.${outlinedInputClasses.root}`]: {
            height: pxToRem(45),
            padding: spacing(0),
        },

        [`& .${inputBaseClasses.root}`]: {
            paddingLeft: spacing(2.5),
        },

        [`+ .${popperClasses.root}`]: {
            paddingTop: spacing(3),

            [`& .${paperClasses.root}`]: {
                boxShadow: shadows[4],
                borderRadius: pxToRem(12),
            },
        },
    }),
);
