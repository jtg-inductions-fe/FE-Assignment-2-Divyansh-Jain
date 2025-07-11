export type ErrorComponentProps = {
    /**Path for the main image*/
    imagePath: string;
    /**Error Message to display on screen*/
    bodyText: string;
    /**Main Heading of the page*/
    heading: string;
    /**Text to display on the button*/
    buttonText: string;
    /**function to handle click event on button */
    handleButtonClick: () => void;
};
