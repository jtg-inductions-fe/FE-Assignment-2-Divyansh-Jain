import { Avatar, styled } from '@mui/material';

import { StyledAvatarProps } from './Avata.types';

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>(
    ({ height, width }) => ({
        height: height ? height : 'auto',
        width: width ? width : 'auto',
    }),
);
