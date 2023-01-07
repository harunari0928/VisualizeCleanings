import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/system";

type Props = {
    sx?: SxProps<Theme>
};

const DayOfWeekSelector = ({ sx }: Props) =>
    <FormControl variant="standard" sx={{ ...sx, width: '4rem' }} required>
        <Select
            label="dayOfWeek"
            defaultValue={0}
            inputProps={{ 'aria-label': 'Without label' }}
        >{['日', '月', '火', '水', '木', '金', '土'].map((d, i) => <MenuItem value={i}>{d}</MenuItem>)}
        </Select>
    </FormControl>;

export default DayOfWeekSelector;
