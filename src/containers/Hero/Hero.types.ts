/**
 * Configuration for a single image, including path, alt text, and layout details.
 */
export type ImageConfig = {
    /**Path for the image to be displayed*/
    imageUrl: string;
    /** Fallback text or accessible label for the image */
    imageLabel: string;
    /** Number of rows the image spans (default: 1) */
    rows?: number;
    /** Number of cols the image spans (default: 1) */
    cols?: number;
};
