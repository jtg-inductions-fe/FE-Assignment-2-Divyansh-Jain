import { Avatar, styled } from '@mui/material';

import { sizeMap } from './Avatar.config';
import { StyledAvatarProps } from './Avatar.types';

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>(
    ({ size = 'sm' }) => ({
        height: sizeMap[size],
        width: sizeMap[size],
    }),
);
