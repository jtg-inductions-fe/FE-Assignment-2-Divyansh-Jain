import { Chip, Stack, useMediaQuery, useTheme } from '@mui/material';

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
        breakpoints,
    } = useTheme();

    const isMobile = useMediaQuery(breakpoints.down('sm'));

    const { payload, active, xLabel, formatter } = props;
    if (active && payload?.length) {
        return (
            <StyledContextCard>
                <Typography variant="subtitle2" color={text.secondary}>
                    {xLabel}
                </Typography>
                {payload.map((ele) => {
                    const { name, value } = formatter(ele.name, ele.value);
                    return (
                        <Stack
                            key={value}
                            direction={isMobile ? 'column' : 'row'}
                            alignItems="center"
                            gap={2}
                        >
                            <Stack direction="row" alignItems="center" gap={1}>
                                <Chip className="active-circle" />
                                <Typography
                                    variant="body1"
                                    color={text.secondary}
                                >
                                    {name}
                                </Typography>
                            </Stack>
                            <Typography variant="h4">{value}</Typography>
                        </Stack>
                    );
                })}
            </StyledContextCard>
        );
    }

    return null;
};
