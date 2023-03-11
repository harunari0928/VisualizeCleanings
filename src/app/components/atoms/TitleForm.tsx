import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

type Props = {
    sx?: SxProps<Theme>
};

const TitleForm = ({ sx }: Props) =>
    <FormControl sx={{ ...sx }} required>
        <FormLabel>タイトル</FormLabel>
        <Input />
    </FormControl>;

export default TitleForm;
