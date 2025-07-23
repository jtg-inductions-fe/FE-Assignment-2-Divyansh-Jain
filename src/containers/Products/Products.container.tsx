import { List, ListItem, Stack, useMediaQuery, useTheme } from '@mui/material';

import { CardListItem, Paper, Typography } from '@components';
import { useProduct } from '@hooks';
import { formatWithComma, numberFormatter } from '@utilities';

export const Products = () => {
    const { products } = useProduct() || {};
    const {
        typography: { pxToRem },
        breakpoints,
    } = useTheme();

    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <Paper
            component="section"
            sx={{
                flexGrow: 3,
                minWidth: pxToRem(300),
                maxWidth: isDesktop ? '60%' : '100%',
            }}
            aria-label="Top Products"
        >
            <Stack gap={4}>
                <Typography variant="h3">Top Products</Typography>
                <List sx={{ overflowY: 'auto', height: pxToRem(370) }}>
                    {products && products.length > 0 ? (
                        products.map((product, index, arr) => (
                            <CardListItem
                                key={product.id}
                                value={numberFormatter(product.sales, {
                                    commas: true,
                                })}
                                valueTooltip={formatWithComma(product.sales)}
                                label="sales"
                                title={product.productName}
                                subtitle={product.techStack}
                                showDivider={index < arr.length - 1}
                            />
                        ))
                    ) : (
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="body1" color="text.secondary">
                                No Available Products
                            </Typography>
                        </ListItem>
                    )}
                </List>
            </Stack>
        </Paper>
    );
};
