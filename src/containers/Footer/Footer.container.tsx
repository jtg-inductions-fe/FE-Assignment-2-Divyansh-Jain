import { Link } from 'react-router-dom';

import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Paper, Typography } from '@components';

import { footerLinks } from './Footer.config';

export const Footer = () => {
    const { breakpoints } = useTheme();

    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <Paper component="footer">
            <Stack
                {...(isDesktop && {
                    direction: 'row',
                    justifyContent: 'space-between',
                })}
                gap={8}
            >
                <Typography variant="body1" color="text.secondary">
                    &copy; 2021 Themesberg, LLC. All rights reserved.
                </Typography>

                <Stack direction="row" gap={6}>
                    {footerLinks &&
                        footerLinks.socialLinks &&
                        footerLinks.socialLinks.map(
                            ({ name, id, Icon, to }) => (
                                <Box
                                    key={id}
                                    aria-label={name}
                                    component={Link}
                                    to={to}
                                    color="text.primary"
                                >
                                    <Icon />
                                </Box>
                            ),
                        )}
                </Stack>
            </Stack>
        </Paper>
    );
};
