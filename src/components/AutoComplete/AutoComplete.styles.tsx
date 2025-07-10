import {
    Autocomplete,
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

        [`+ .${popperClasses.root}`]: {
            paddingTop: '8px',
            [`& .${paperClasses.root}`]: {
                borderRadius: '12px',
                padding: '2rem',
            },
        },
    }),
);
