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
                    {customers?.map((customer) => (
                        <CardListItem
                            key={customer.id}
                            primaryText2={customer.totalSpent.toString()}
                            primaryText1={customer.fullname}
                            secondaryText1={customer.email}
                            src={customer.profileUrl}
                            alt={customer.fullname}
                        />
                    ))}
                </List>
            </Stack>
        </Paper>
    );
};
