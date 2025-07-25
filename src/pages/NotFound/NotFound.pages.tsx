import NotFoundImage from '@assets/images/404.webp';
import { ErrorComponent } from '@components/Error';
import { ROUTES } from '@routes';

export const NotFound = () => (
    <ErrorComponent
        heading="Page not found"
        bodyText="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
        imagePath={NotFoundImage}
        imageTitle="404 Not found"
        buttonText="Go Back Home"
        to={ROUTES.HOME}
    />
);
