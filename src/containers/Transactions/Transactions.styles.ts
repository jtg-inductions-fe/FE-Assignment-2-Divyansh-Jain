import { styled, TableCell, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        maxWidth: pxToRem(500),
    }),
);

export const StyledTableRow = styled(TableRow)(({ theme: { palette } }) => ({
    '&:nth-of-type(2n)': {
        backgroundColor: palette.grey['50'],
    },
}));
