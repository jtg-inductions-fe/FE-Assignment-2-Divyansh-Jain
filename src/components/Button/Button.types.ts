import { ButtonProps } from '@mui/material';

export type StyledButtonProps = ButtonProps & {
    /** String property which takes css units for borderRadius property */
    radius?: string;
};
