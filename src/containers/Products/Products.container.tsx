import { List, Stack } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useProduct } from '@hooks';

export const Products = () => {
    const { products } = useProduct() || {};

    return (
        <Paper component="section" sx={{ flexGrow: 3 }}>
            <Stack gap={4}>
                <Typography variant="h3">Top Products</Typography>
                <List>
                    {products?.map((product, index, arr) => (
                        <CardListItem
                            key={product.id}
                            rightTitle={product.sales.toString()}
                            rightSubtitle="sales"
                            leftTitle={product.productName}
                            leftSubtitle={product.techStack}
                            showDivider={index < arr.length - 1}
                        />
                    ))}
                </List>
            </Stack>
        </Paper>
    );
};
