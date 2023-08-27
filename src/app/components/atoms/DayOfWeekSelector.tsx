import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SxProps } from '@mui/material/styles';
import type { Theme } from '@mui/system';

type Props = {
    sx?: SxProps<Theme>;
    onChange: (value: number) => void;
};

const isHTMLInputElement = (value: (EventTarget & HTMLInputElement) | (EventTarget & {
    value: number;
    name: string;
})): value is HTMLInputElement => 'addEventListener' in value;

const DayOfWeekSelector = ({ sx, onChange }: Props) =>
    <FormControl variant='standard' sx={{ ...sx, width: '4rem' }} required>
        <Select<number>
            label='dayOfWeek'
            defaultValue={0}
            inputProps={{ 'aria-label': 'Without label' }}
            onChange={({ target }, _) => {
                if (isHTMLInputElement(target)) {
                    throw new Error('Invalid event target.');
                }
                onChange(target.value);
            }}
        >{['日', '月', '火', '水', '木', '金', '土'].map((d, i) => <MenuItem value={i} key={i}>{d}</MenuItem>)}
        </Select>
    </FormControl>;


export default DayOfWeekSelector;
