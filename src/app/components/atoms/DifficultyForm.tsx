import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

type Props = {
    sx?: SxProps<Theme>
};

const DifficultyForm = ({ sx }: Props) =>
    <FormControl required>
        <FormLabel sx={{ ...sx }}>難易度</FormLabel>
        <Input
            type="number"
            sx={{ width: '4rem' }}
            inputProps={{ min: 1, max: 50 }}
            aria-label='Without label'
            endAdornment={<InputAdornment position="end">pt</InputAdornment>} />
    </FormControl>;

export default DifficultyForm;
