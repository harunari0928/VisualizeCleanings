import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BasicDialogActionButtons from '../atoms/BasicDialogActionButtons';

type Props = {
    title: string,
    message: string,
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
};

const RemoveItemDialog = ({ title, message, isOpen, setOpen }: Props) =>
    <Dialog
        fullWidth={true}
        maxWidth='xs'
        open={isOpen}
        onClose={() => setOpen(false)}
    >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <BasicDialogActionButtons
            executionTitle='削除'
            cancelTitle='キャンセル'
            onExecute={() => setOpen(false)}
            onCancel={() => setOpen(false)} />
    </Dialog>;

export default RemoveItemDialog;
