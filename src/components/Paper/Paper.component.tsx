import { StyledPaper } from './Paper.styles';
import { StyledPaperProps } from './Paper.types';

/**Paper component provided by MUI with some additional styles applied
 */
export const Paper = ({ children, ...paperProps }: StyledPaperProps) => (
    <StyledPaper {...paperProps}>{children}</StyledPaper>
);
