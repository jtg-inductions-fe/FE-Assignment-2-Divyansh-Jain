export type Product = {
    /** Optional unique identifier for the product */
    id?: string | number;

    /** Name of the product */
    productName: string;

    /** Technology stack used in the product */
    techStack: string;

    /** Number of sales */
    sales: number;
};
