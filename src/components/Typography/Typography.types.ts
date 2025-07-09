import { TypographyProps } from '@mui/material';

export type StyledTypographyProps = TypographyProps & {
    /**
     * Number of lines after which the content should be truncated.
     *
     */
    lines?: number;
};
