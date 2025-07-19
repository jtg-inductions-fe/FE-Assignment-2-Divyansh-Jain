import { styled, TableCell, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(() => ({
    border: 'none',
    maxWidth: '80%',
}));

export const StyledTableRow = styled(TableRow)(({ theme: { palette } }) => ({
    '&:nth-of-type(2n)': {
        backgroundColor: palette.grey['50'],
    },
}));
