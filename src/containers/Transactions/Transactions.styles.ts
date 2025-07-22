import { styled, Table, TableCell, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({}) => ({
    border: 'none',
    '&:first-of-type': {
        borderRadius: '12px 0 0 12px',
    },
    '&:last-of-type': {
        borderRadius: '0 12px 12px 0',
    },
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

export const StyledTable = styled(Table)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        minWidth: pxToRem(768),
        overflow: 'auto',
    }),
);
