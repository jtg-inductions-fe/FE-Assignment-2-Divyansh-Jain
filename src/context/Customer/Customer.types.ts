export type Customer = {
    /** Optional unique identifier for the customer */
    id?: string | number;

    /** Customer's full name */
    fullname: string;

    /** URL to the customer's profile image or page */
    profileUrl: string;

    /** Customer's email address */
    email: string;

    /** Total amount the customer has spent */
    totalSpent: number;
};
