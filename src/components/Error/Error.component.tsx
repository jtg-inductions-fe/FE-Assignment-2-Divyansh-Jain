import { Box, Stack, useMediaQuery } from '@mui/material';

import { Button, Typography } from '@components';
import { theme } from '@theme';
import { typography } from '@theme/foundations';

import { ErrorComponentProps } from './Error.types';

/**
 * Error Component
 *
 * Displays a user-friendly error message or fallback UI when an error occurs.
 * Can be used as a boundary fallback, or to handle API errors, 404s, etc.
 */
export const ErrorComponent = ({
    buttonText,
    imagePath,
    heading,
    bodyText,
    handleButtonClick,
}: ErrorComponentProps) => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const { pxToRem } = typography.typographyUtil;
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            gap={isDesktop ? 0 : 4}
            height="80%"
        >
            <Box>
                <img src={imagePath} alt="404 Not Found" width="100%" />
            </Box>
            <Stack alignItems="center" gap={5.5} px={2}>
                <Stack alignItems="center" gap={isDesktop ? 0 : 2.5}>
                    <Typography variant="h1" textAlign="center" lines={2}>
                        {heading}
                    </Typography>
                    <Typography
                        variant="body1"
                        color={theme.palette.text.secondary}
                        textAlign="center"
                        lines={4}
                    >
                        {bodyText}
                    </Typography>
                </Stack>
                <Button
                    variant="contained"
                    radius={pxToRem(12)}
                    onClick={handleButtonClick}
                >
                    {buttonText}
                </Button>
            </Stack>
        </Stack>
    );
};
