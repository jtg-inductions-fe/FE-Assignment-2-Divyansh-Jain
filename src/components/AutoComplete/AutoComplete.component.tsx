import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './AutoComplete.styles';
import { StyledAutoCompleteProps } from './AutoComplete.types';

/** Enhanced Version of MUI's AutoComplete component with better styling
 */

export const AutoComplete = ({
    handleSelection,
    handleInputChange,
    placeholder,
    options,
    StartIcon,
    EndIcon,
    getOptionLabel,
}: StyledAutoCompleteProps) => (
    <StyledAutocomplete
        disablePortal
        freeSolo
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={(_, option, reason) => {
            if (reason === 'selectOption') {
                handleSelection(option as string);
            }
        }}
        filterOptions={(x) => x}
        onInputChange={(_, inputValue) => handleInputChange(inputValue)}
        renderInput={(params) => (
            <TextField
                {...params}
                placeholder={placeholder || ''}
                slotProps={{
                    input: {
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                {StartIcon && <StartIcon />}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <>{EndIcon || params.InputProps.endAdornment}</>
                        ),
                    },
                }}
                fullWidth
            />
        )}
    />
);
