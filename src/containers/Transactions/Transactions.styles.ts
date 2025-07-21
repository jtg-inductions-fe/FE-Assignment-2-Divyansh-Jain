import { styled, Table, TableCell, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({}) => ({
    border: 'none',
}));

export const StyledTableRow = styled(TableRow)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
        },
    }) => ({
        '&:nth-of-type(2n)': {
            backgroundColor: palette.background.default,
        },
        borderRadius: pxToRem(12),
    }),
);

export const StyledTable = styled(Table)(({ theme: { breakpoints } }) => ({
    minWidth: breakpoints.values.md,
    overflow: 'auto',
    cursor: 'pointer',
}));
