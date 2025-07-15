import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './AutoComplete.styles';
import { StyledAutoCompleteProps } from './AutoComplete.types';

/** Enhanced Version of MUI's AutoComplete component with better styling
 */
export const AutoComplete = ({
    placeholder,
    StartIcon,
    EndIcon,
    options,
    getOptionLabel,
    handleInputChange,
    handleSelection,
}: StyledAutoCompleteProps) => (
    <StyledAutocomplete
        disablePortal
        freeSolo
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={(_, option, reason) => {
            if (reason === 'selectOption') {
                handleSelection(getOptionLabel(option));
            }
        }}
        filterOptions={(suggestions) => suggestions}
        onInputChange={(_, inputValue) => handleInputChange(inputValue)}
        renderInput={(params) => (
            <TextField
                {...params}
                placeholder={placeholder || ''}
                slotProps={{
                    input: {
                        ...params.InputProps,
                        onKeyDown: (e) => {
                            if (e.key === 'Enter') {
                                handleSelection(e.currentTarget.value);
                            }
                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                {StartIcon && <StartIcon />}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <>{EndIcon || params.InputProps.endAdornment}</>
                            </InputAdornment>
                        ),
                    },
                }}
                fullWidth
            />
        )}
    />
);
