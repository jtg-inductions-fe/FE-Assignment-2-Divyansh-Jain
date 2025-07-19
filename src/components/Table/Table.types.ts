import { TableProps } from '@mui/material';

export type StyledTableProps<T> = TableProps & {
    cols: Array<keyof T>;
    rows: T[];
};
