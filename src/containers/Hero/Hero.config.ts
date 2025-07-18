import img1 from '@assets/images/dashboard-image-1.webp';
import img2 from '@assets/images/dashboard-image-2.webp';
import img3 from '@assets/images/dashboard-image-3.webp';
import img4 from '@assets/images/dashboard-image-4.webp';

import { ImageConfig } from './Hero.types';

export const Images: ImageConfig[] = [
    {
        imageUrl: img1,
        imageLabel: 'Girl holding paper while on a call',
        rows: 1,
        cols: 1,
    },
    {
        imageUrl: img2,
        imageLabel: 'Confident looking girl',
        rows: 1,
        cols: 1,
    },
    {
        imageUrl: img3,
        imageLabel: 'Girl on a telephone call ',
        rows: 2,
        cols: 1,
    },
    {
        imageUrl: img4,
        imageLabel: 'Hands on keyboard',
        rows: 1,
        cols: 2,
    },
];
