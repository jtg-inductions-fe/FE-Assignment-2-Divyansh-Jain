import { TypographyOwnProps } from '@mui/material';

export type StyledTypographyProps = TypographyOwnProps & {
    /**
     * Number of lines after which the content should be truncated.
     *
     */
    lines?: number;
};
