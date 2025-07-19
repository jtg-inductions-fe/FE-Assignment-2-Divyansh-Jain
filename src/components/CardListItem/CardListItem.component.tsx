import { Box, Divider, Stack, Tooltip, useTheme } from '@mui/material';

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
                gap={5}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    maxWidth="70%"
                >
                    {avatarSrc && <Avatar src={avatarSrc} alt={avatarAlt} />}
                    <Box minWidth={0} maxWidth="100%">
                        <Tooltip title={leftTitle}>
                            <Typography variant="subtitle1" lines={1}>
                                {leftTitle}
                            </Typography>
                        </Tooltip>
                        <Tooltip title={leftSubtitle}>
                            <Typography
                                variant="subtitle2"
                                color={palette.text.secondary}
                                lines={1}
                            >
                                {leftSubtitle}
                            </Typography>
                        </Tooltip>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={1}
                    maxWidth="30%"
                >
                    <Tooltip title={rightTitle}>
                        <Typography variant="subtitle1">
                            {rightTitle}
                        </Typography>
                    </Tooltip>
                    {rightSubtitle && (
                        <Tooltip title={rightSubtitle}>
                            <Typography
                                variant="subtitle1"
                                color={palette.text.secondary}
                                lines={1}
                            >
                                {rightSubtitle}
                            </Typography>
                        </Tooltip>
                    )}
                </Stack>
            </Stack>
            {showDivider && <Divider />}
        </Stack>
    );
};
