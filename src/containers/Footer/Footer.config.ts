import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

import { ROUTES } from '@routes';

import { FooterLinks } from './Footer.types';

export const footerLinks: FooterLinks = {
    socialLinks: [
        {
            id: 'social-1',
            Icon: Facebook,
            name: 'Facebook',
            to: ROUTES.FACEBOOK,
        },
        {
            id: 'social-2',
            Icon: Twitter,
            name: 'Twitter',
            to: ROUTES.TWITTER,
        },
        {
            id: 'social-3',
            Icon: GitHub,
            name: 'Github',
            to: ROUTES.GITHUB,
        },
        {
            id: 'social-4',
            Icon: LinkedIn,
            name: 'Linkedin',
            to: ROUTES.LINKEDIN,
        },
    ],
};
