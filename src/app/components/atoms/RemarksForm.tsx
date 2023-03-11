import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

type Props = {
    sx?: SxProps<Theme>
};

const RemarksForm = ({ sx }: Props) =>
    <FormControl sx={{ ...sx }}>
        <FormLabel>備考</FormLabel>
        <Input
            multiline
            maxRows={4} />
    </FormControl>;

export default RemarksForm;
