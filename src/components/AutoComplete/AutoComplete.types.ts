import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type StyledAutoCompleteProps = {
    /** Array of filtered option provided to Autocomplete*/
    options: string[] | object[];
    /** Method to retrieve label from option */
    getOptionLabel: (option: unknown) => string;
    /**Placeholder value to display on input box*/
    placeholder?: string;
    /**Icon display at the starting position of input*/
    StartIcon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
    /**Icon display at the ending position of input*/
    EndIcon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
    /**Method to handle Input Change e.g filtering logic*/
    handleInputChange: (inputValue: string) => void;
    /**Method to handle Selection of option e.g navigation*/
    handleSelection: (selectedValue: string) => void;
};
