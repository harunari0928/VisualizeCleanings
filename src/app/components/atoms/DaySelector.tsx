import React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/system";
import TextField from "@mui/material/TextField";

type Props = {
    sx?: SxProps<Theme>
};

const DaySelector = ({ sx }: Props) =>
    <FormControl sx={{ ...sx, width: '4rem' }} required>
        <TextField
            variant="standard"
            type="number"
            InputProps={{
                inputProps: { min: 1, max: 31 },
                'aria-label': 'Without label',
                endAdornment: <InputAdornment position="end">日</InputAdornment>,
            }} />
    </FormControl>;

export default DaySelector;
