import { User } from '@context';

/**
 * Props for the UserProfile component
 */
export type UserProfileProps = {
    /**
     * The user profile data to display
     */
    user: User;
    handleLogout: () => void;
};
