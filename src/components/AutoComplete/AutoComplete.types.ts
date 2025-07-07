export type StyledAutoCompleteProps = {
    /** Array of option provided to Autocomplete*/
    suggestions: string[];
};

export type FilterFunc = (inputValue: string) => void;
