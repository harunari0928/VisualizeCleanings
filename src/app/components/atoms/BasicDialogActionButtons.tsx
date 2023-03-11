import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

type Props = {
    executionTitle: string,
    cancelTitle: string,
    onExecute: () => void,
    onCancel: () => void,
};

const DialogActionButtons = ({ executionTitle: executionButton, cancelTitle: cancelButton, onExecute: executionHandler, onCancel: cancelHandler }: Props) =>
    <DialogActions>
        <Button onClick={executionHandler}>{executionButton}</Button>
        <Button onClick={cancelHandler} autoFocus>{cancelButton}</Button>
    </DialogActions>;

export default DialogActionButtons;
