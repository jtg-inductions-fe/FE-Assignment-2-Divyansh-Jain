import {
    Autocomplete,
    inputBaseClasses,
    outlinedInputClasses,
    paperClasses,
    styled,
} from '@mui/material';
import popperClasses from '@mui/material/Popper/popperClasses';

export const StyledAutocomplete = styled(Autocomplete)(
    ({ theme: { shadows, spacing } }) => ({
        width: '30vw',
        [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: 'none',
            borderRadius: spacing(4),
            boxShadow: shadows[4],
        },
        [`.${outlinedInputClasses.root}`]: {
            height: '45px',
            padding: 0,
        },
        [`& .${inputBaseClasses.root}`]: {
            paddingLeft: '10px',
        },
        [`+ .${popperClasses.root}`]: {
            paddingTop: spacing(3),
            [`& .${paperClasses.root}`]: {
                boxShadow: shadows[4],
                borderRadius: spacing(3),
            },
        },
    }),
);
