import { Box, Stack, useTheme } from '@mui/material';

import { Avatar, Typography } from '@components';

import { CardListItemProps } from './CardListItem.types';

export const CardListItem = ({
    imageUrl,
    imageLabel,
    primaryText,
    secondaryText,
    label,
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
                    <Avatar src={imageUrl} alt={imageLabel} />
                    <Box>
                        <Typography variant="subtitle1">
                            {primaryText}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color={palette.text.secondary}
                        >
                            {secondaryText}
                        </Typography>
                    </Box>
                </Stack>
                <Typography variant="subtitle1">{label}</Typography>
            </Stack>
        </Stack>
    );
};
