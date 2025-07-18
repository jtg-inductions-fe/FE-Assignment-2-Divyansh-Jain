import { Chip, Stack, useTheme } from '@mui/material';

import { Typography } from '@components';

import { StyledContextCard } from './ContextCard.styles';
import { ContextCardProps } from './ContextCard.types';

/**
 * A reusable tooltip component that can be displayed on charts
 * to show additional data or information on hover.
 */
export const ContextCard = (props: ContextCardProps) => {
    const {
        palette: { text },
    } = useTheme();
    const { payload, active, label, formatter } = props;
    if (active && payload?.length) {
        return (
            <StyledContextCard>
                <Typography variant="subtitle2" color={text.secondary}>
                    {label}
                </Typography>
                {payload.map((ele) => {
                    const { name, value } = formatter(ele.name, ele.value);
                    return (
                        <Stack
                            key={value}
                            direction="row"
                            alignItems="center"
                            gap={2}
                        >
                            <Chip className="active-circle" />
                            <Typography variant="body1" color={text.secondary}>
                                {name}
                            </Typography>
                            <Typography variant="h4">{value}</Typography>
                        </Stack>
                    );
                })}
            </StyledContextCard>
        );
    }

    return null;
};
