import {
    Box,
    Button,
    Stack,
    Tooltip,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Typography } from '@components';

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
    imageTitle,
    heading,
    bodyText,
    handleButtonClick,
}: ErrorComponentProps) => {
    const {
        breakpoints,
        palette,
        typography: { pxToRem },
    } = useTheme();
    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <Stack
            sx={{ height: '100%' }}
            alignItems="center"
            justifyContent="center"
            gap={isDesktop ? 0 : 4}
        >
            <Box
                component="img"
                src={imagePath}
                alt={imageTitle}
                maxWidth={isDesktop ? '50%' : '100%'}
            />
            <Stack alignItems="center" gap={6} px={2}>
                <Stack
                    alignItems="center"
                    gap={isDesktop ? 0 : 12}
                    maxWidth="100%"
                >
                    <Typography variant="h1" textAlign="center">
                        {heading}
                    </Typography>
                    <Tooltip
                        title={bodyText}
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 80],
                                        },
                                    },
                                ],
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            color={palette.text.secondary}
                            textAlign="center"
                            lines={4}
                        >
                            {bodyText}
                        </Typography>
                    </Tooltip>
                </Stack>
                <Button
                    variant="contained"
                    sx={{ borderRadius: pxToRem(12) }}
                    onClick={handleButtonClick}
                >
                    {buttonText}
                </Button>
            </Stack>
        </Stack>
    );
};
