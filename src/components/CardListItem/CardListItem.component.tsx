import { Box, Divider, Stack, useTheme } from '@mui/material';

import { Avatar, Typography } from '@components';

import { CardListItemProps } from './CardListItem.types';

/** CardList component with optional avatar support. */
export const CardListItem = ({
    avatarSrc,
    avatarAlt,
    leftTitle,
    leftSubtitle,
    rightTitle,
    rightSubtitle,
    showDivider,
}: CardListItemProps) => {
    const { palette } = useTheme();
    return (
        <Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                py={2}
            >
                <Stack direction="row" alignItems="center" gap={2}>
                    {avatarSrc && <Avatar src={avatarSrc} alt={avatarAlt} />}
                    <Box>
                        <Typography variant="subtitle1">{leftTitle}</Typography>
                        <Typography
                            variant="subtitle2"
                            color={palette.text.secondary}
                        >
                            {leftSubtitle}
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">{rightTitle}</Typography>
                    {rightSubtitle && (
                        <Typography
                            variant="subtitle1"
                            color={palette.text.secondary}
                        >
                            {rightSubtitle}
                        </Typography>
                    )}
                </Stack>
            </Stack>
            {showDivider && <Divider />}
        </Stack>
    );
};
