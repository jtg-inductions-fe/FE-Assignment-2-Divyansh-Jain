import { List, Stack } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useCustomer } from '@hooks';
export const Customers = () => {
    const customerContext = useCustomer();

    // update here
    const { customers } = customerContext!;

    return (
        <Paper component="section" sx={{ flexGrow: 1 }}>
            <Stack gap={4}>
                <Typography variant="h3">Latest Customers</Typography>
                <List>
                    {customers.map((customer) => (
                        <CardListItem
                            key={customer.id}
                            label={customer.totalSpent.toString()}
                            primaryText={customer.fullname}
                            secondaryText={customer.email}
                            imageUrl={customer.profileUrl}
                            imageLabel={customer.fullname}
                        />
                    ))}
                </List>
            </Stack>
        </Paper>
    );
};
