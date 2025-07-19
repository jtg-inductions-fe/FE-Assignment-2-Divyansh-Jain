import { List, Stack, useTheme } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useProduct } from '@hooks';

export const Products = () => {
    const { products } = useProduct() || {};
    const {
        typography: { pxToRem },
    } = useTheme();
    return (
        <Paper
            component="section"
            sx={{
                flexGrow: 3,
                minWidth: pxToRem(300),
            }}
            aria-label="Top Products"
        >
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
