import { useNavigate } from 'react-router-dom';

import ErrorImage from '@assets/images/ErrorPage-bg.webp';
import { ErrorComponent } from '@components/Error';
import { ROUTES } from '@routes';

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <ErrorComponent
                heading="Something has gone seriously wrong"
                bodyText="It’s always time for a coffee break We should be back by the time you finish your coffee."
                imagePath={ErrorImage}
                imageTitle="Error"
                buttonText="Go Back Home"
                handleButtonClick={() => void navigate(ROUTES.HOME)}
            />
        </>
    );
};
