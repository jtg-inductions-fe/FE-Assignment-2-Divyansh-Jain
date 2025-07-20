import { PaperProps } from '@mui/material';

import { StyledPaper } from './Paper.styles';

/**Paper component provided by MUI with some additional styles applied
 */
export const Paper = ({ children, ...paperProps }: PaperProps) => (
    <StyledPaper {...paperProps}>{children}</StyledPaper>
);
