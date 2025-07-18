import { Box, Divider, Stack, useTheme } from '@mui/material';

import { Avatar, Typography } from '@components';

import { CardListItemProps } from './CardListItem.types';

export const CardListItem = ({
    src,
    alt,
    primaryText1,
    secondaryText1,
    primaryText2,
    secondaryText2,
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
                    {src && <Avatar src={src} alt={alt} />}
                    <Box>
                        <Typography variant="subtitle1">
                            {primaryText1}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color={palette.text.secondary}
                        >
                            {secondaryText1}
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Typography variant="subtitle1">{primaryText2}</Typography>
                    {secondaryText2 && (
                        <Typography variant="subtitle2">
                            {secondaryText2}
                        </Typography>
                    )}
                </Stack>
            </Stack>
            {}
            <Divider />
        </Stack>
    );
};
