import { List, Stack } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useCustomer } from '@hooks';
import { numberFormatter } from '@utilities';

export const Customers = () => {
    const { customers } = useCustomer() || {};

    return (
        <Paper
            component="section"
            sx={{
                flexGrow: 1,
            }}
            aria-label="Latest Customers"
        >
            <Stack gap={4}>
                <Typography variant="h3">Latest Customers</Typography>
                <List>
                    {customers?.map((customer, index, arr) => (
                        <CardListItem
                            key={customer.id}
                            rightTitle={`$${numberFormatter(customer.totalSpent)}`}
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
