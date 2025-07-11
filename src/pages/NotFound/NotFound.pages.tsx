import { useNavigate } from 'react-router-dom';

import NotFoundImage from '@assets/images/404.png';
import { ErrorComponent } from '@components/Error';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <ErrorComponent
                heading="Page not found"
                bodyText="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
                imagePath={NotFoundImage}
                buttonText="Go Back Home"
                handleButtonClick={() => void navigate('/')}
            />
        </>
    );
};
