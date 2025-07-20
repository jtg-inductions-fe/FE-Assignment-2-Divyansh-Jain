import { List, ListItem, Stack, useMediaQuery, useTheme } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useCustomer } from '@hooks';
import { numberFormatter } from '@utilities';

export const Customers = () => {
    const { customers } = useCustomer() || {};
    const {
        breakpoints,
        typography: { pxToRem },
    } = useTheme();

    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <Paper
            component="section"
            sx={{
                flexGrow: 1,
                minWidth: pxToRem(300),
                maxWidth: isDesktop ? '40%' : '100%',
            }}
            aria-label="Latest Customers"
        >
            <Stack gap={4}>
                <Typography variant="h3">Latest Customers</Typography>
                <List>
                    {customers && customers.length > 0 ? (
                        customers?.map((customer, index, arr) => (
                            <CardListItem
                                key={customer.id}
                                rightTitle={`\$${numberFormatter(customer.totalSpent)}`}
                                leftTitle={customer.fullname}
                                leftSubtitle={customer.email}
                                avatarSrc={customer.profileUrl}
                                avatarAlt={customer.fullname}
                                showDivider={index < arr.length - 1}
                            />
                        ))
                    ) : (
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="body1" color="text.secondary">
                                No Customers Yet!
                            </Typography>
                        </ListItem>
                    )}
                </List>
            </Stack>
        </Paper>
    );
};
