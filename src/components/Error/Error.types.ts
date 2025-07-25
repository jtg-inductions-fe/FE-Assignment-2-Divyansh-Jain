import { To } from 'react-router-dom';

export type ErrorComponentProps = {
    /**Path for the main image*/
    imagePath: string;
    /**Title for main image*/
    imageTitle: string;
    /**Error Message to display on screen*/
    bodyText: string;
    /**Main Heading of the page*/
    heading: string;
    /**Text to display on the button*/
    buttonText: string;
    /**function to handle click event on button */
    handleButtonClick?: () => void;
    /**Path to navigate on button click */
    to?: To;
};
