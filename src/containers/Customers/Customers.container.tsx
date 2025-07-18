import { List, Stack } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useCustomer } from '@hooks';

export const Customers = () => {
    const { customers } = useCustomer() || {};

    return (
        <Paper component="section" sx={{ flexGrow: 1 }}>
            <Stack gap={4}>
                <Typography variant="h3">Latest Customers</Typography>
                <List>
                    {customers?.map((customer, index, arr) => (
                        <CardListItem
                            key={customer.id}
                            rightTitle={`$${customer.totalSpent}`}
                            leftTitle={customer.fullname}
                            leftSubtitle={customer.email}
                            avatarSrc={customer.profileUrl}
                            avatarAlt={customer.fullname}
                            showDivider={index < arr.length - 1}
                        />
                    ))}
                </List>
            </Stack>
        </Paper>
    );
};
