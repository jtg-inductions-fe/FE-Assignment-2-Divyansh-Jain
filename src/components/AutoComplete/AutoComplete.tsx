import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { debounce } from 'utilities/debouce';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './AutoComplete.styles';
import { FilterFunc, StyledAutoCompleteProps } from './AutoComplete.types';

export const AutoComplete: React.FC<StyledAutoCompleteProps> = ({
    suggestions,
}) => {
    const navigate = useNavigate();

    const [results, setResults] = useState<string[]>(suggestions);

    /**
     * function used to filter the results for Autocomplete
     *
     * @param inputValue input field value
     * @returns {void}
     *
     */
    const filterFunc: FilterFunc = (inputValue) => {
        const newResults = inputValue
            ? results.filter((value) =>
                  value.toLowerCase().includes(inputValue.toLowerCase()),
              )
            : suggestions;
        setResults(newResults);
    };
    return (
        <>
            <StyledAutocomplete
                disablePortal={true}
                freeSolo
                options={results}
                onChange={(_, option, reason) => {
                    if (reason === 'selectOption') {
                        void navigate(`/products/${option as string}`);
                    }
                }}
                filterOptions={(x) => x}
                onInputChange={(_, inputValue) => {
                    debounce(filterFunc, 800)(inputValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <>{params.InputProps.endAdornment}</>
                                ),
                            },
                        }}
                        fullWidth
                    />
                )}
            />
        </>
    );
};
