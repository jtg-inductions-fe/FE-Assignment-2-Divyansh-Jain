import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/**
 * Represents a navigational link with associated metadata.
 */
type SocialLink = {
    /** Unique identifier for the link */
    id: string;

    /** Name or alternate text to be displayed */
    name: string;

    /** Icon component to display alongside the link */
    Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;

    /** Route path to redirect to when clicked */
    to: string;
};

export type FooterLinks = {
    socialLinks: SocialLink[];
};
