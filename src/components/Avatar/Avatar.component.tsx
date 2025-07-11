import { StyledAvatarProps } from './Avata.types';
import { StyledAvatar } from './Avatar.style';

/** Enhanced Version of MUI's Avatar Component with height and width support  */
export const Avatar = (props: StyledAvatarProps) => <StyledAvatar {...props} />;
