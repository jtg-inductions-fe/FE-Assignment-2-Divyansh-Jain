import { Button, styled } from '@mui/material';

import { StyledButtonProps } from './Button.types';

export const StyledButton = styled(Button)<StyledButtonProps>(({ radius }) => ({
    borderRadius: radius ? radius : 0,
}));
