import {
    ImageList,
    ImageListItem,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Images } from './Hero.config';
import { COLS_DESKTOP, COLS_MOBILE, ROW_HEIGHT } from './Hero.constants';

export const Hero = () => {
    const { breakpoints } = useTheme();
    const isDesktop = useMediaQuery(breakpoints.up('md'));

    return (
        <ImageList
            cols={isDesktop ? COLS_DESKTOP : COLS_MOBILE}
            rowHeight={ROW_HEIGHT}
            gap={isDesktop ? 11 : 5}
        >
            {Images.map((item) => (
                <ImageListItem
                    key={item.imageUrl}
                    rows={isDesktop ? item.rows : 1}
                    cols={isDesktop ? item.cols : 1}
                >
                    <img
                        style={{ maxHeight: '100%' }}
                        src={`${item.imageUrl}`}
                        alt={item.imageLabel}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
