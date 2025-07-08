export type User = {
    /** Optional unique identifier for the user */
    id?: string | number;

    /** User's display name or handle */
    username: string;

    /** User's full name */
    fullname: string;

    /** User's email address */
    email: string;
};
