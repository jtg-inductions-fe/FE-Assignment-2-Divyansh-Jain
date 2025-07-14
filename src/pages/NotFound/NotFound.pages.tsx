import { useNavigate } from 'react-router-dom';

import NotFoundImage from '@assets/images/404.webp';
import { ErrorComponent } from '@components/Error';
import { ROUTES } from '@routes';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <ErrorComponent
                heading="Page not found"
                bodyText="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
                imagePath={NotFoundImage}
                imageTitle="404 Not found"
                buttonText="Go Back Home"
                handleButtonClick={() => void navigate(ROUTES.HOME)}
            />
        </>
    );
};
