import { Avatar, styled } from '@mui/material';

import { StyledAvatarProps } from './Avatar.types';
import { sizeMap } from './Avatar.types';

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>(
    ({ size = 'sm' }) => ({
        height: sizeMap[size],
        width: sizeMap[size],
    }),
);
