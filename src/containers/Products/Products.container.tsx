import { CardListItem, Paper } from '@components';

export const Products = () => (
    <Paper component="section" sx={{ flexGrow: 3 }}>
        <CardListItem
            imageUrl={''}
            imageLabel="Bonnie green profile"
            primaryText="bonnie-green"
            secondaryText="bonnie@example.com"
            label="80"
        />
    </Paper>
);
