import { Box, Divider, Stack, Tooltip, useTheme } from '@mui/material';

import { Avatar, Typography } from '@components';

import { CardListItemProps } from './CardListItem.types';

/** CardList component with optional avatar support. */
export const CardListItem = ({
    avatarSrc,
    avatarAlt,
    title,
    subtitle,
    value,
    valueTooltip,
    label,
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
                        <Tooltip title={title}>
                            <Typography variant="subtitle1" lines={1}>
                                {title}
                            </Typography>
                        </Tooltip>
                        <Tooltip title={subtitle}>
                            <Typography
                                variant="subtitle2"
                                color={palette.text.secondary}
                                lines={1}
                            >
                                {subtitle}
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
                    <Tooltip title={valueTooltip ? valueTooltip : value}>
                        <Typography variant="subtitle1" lines={1}>
                            {value}
                        </Typography>
                    </Tooltip>
                    {label && (
                        <Tooltip title={label}>
                            <Typography
                                variant="subtitle1"
                                color={palette.text.secondary}
                                lines={1}
                            >
                                {label}
                            </Typography>
                        </Tooltip>
                    )}
                </Stack>
            </Stack>
            {showDivider && <Divider />}
        </Stack>
    );
};
