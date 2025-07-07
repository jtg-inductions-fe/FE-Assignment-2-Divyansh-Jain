import React from 'react';

import { StyledIconButton } from './IconButton.styles';
import { StyledIconButtonProps } from './IconButton.types';

/**
 * StyledIconButton component with support for custom props like `circle` and `elevation`.
 */
export const IconButton: React.FC<StyledIconButtonProps> = (props) => (
    <StyledIconButton {...props} />
);
