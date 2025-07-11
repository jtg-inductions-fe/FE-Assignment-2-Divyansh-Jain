import React from 'react';

import { StyledIconButton } from './IconButton.styles';
import { StyledIconButtonProps } from './IconButton.types';

/**
 * Enhanced Version of MUI's IconButton component with support for custom props like `shape`, `elevation`, and `stringcolor`.
 */
export const IconButton: React.FC<StyledIconButtonProps> = (props) => (
    <StyledIconButton {...props} />
);
