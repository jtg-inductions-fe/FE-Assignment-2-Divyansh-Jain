export type User = {
    /** Unique identifier for the user */
    id: string | number;

    /** Path to user's profile pic */

    profileUrl: string;

    /** User's display name or handle */
    username: string;

    /** User's full name */
    fullname: string;

    /** User's email address */
    email: string;
};
