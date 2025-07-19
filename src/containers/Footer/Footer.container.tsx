import { Link } from 'react-router-dom';

import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Paper, Typography } from '@components';
import { ROUTES } from '@routes';

export const Footer = () => {
    const { breakpoints, palette, spacing } = useTheme();

    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <Paper component="footer" style={{ padding: spacing(12) }}>
            <Stack
                {...(isDesktop && {
                    direction: 'row',
                    justifyContent: 'space-between',
                })}
                gap={8}
            >
                <Typography variant="body1" color={palette.text.secondary}>
                    &copy; 2021 Themesberg, LLC. All rights reserved.
                </Typography>

                <Stack direction="row" gap={6}>
                    <Box
                        component={Link}
                        to={ROUTES.FACEBOOK}
                        color={palette.text.primary}
                    >
                        <Facebook />
                    </Box>
                    <Box
                        component={Link}
                        to={ROUTES.TWITTER}
                        color={palette.text.primary}
                    >
                        <Twitter />
                    </Box>
                    <Box
                        component={Link}
                        to={ROUTES.GITHUB}
                        color={palette.text.primary}
                    >
                        <GitHub />
                    </Box>
                    <Box
                        component={Link}
                        to={ROUTES.LINKEDIN}
                        color={palette.text.primary}
                    >
                        <LinkedIn />
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    );
};
