import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BasicDialogActionButtons from '../atoms/BasicDialogActionButtons';

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

const CleaningAchievementRegistrationDialog = ({ isOpen, onClose }: Props) =>
    <Dialog
        fullWidth={true}
        maxWidth="md"
        open={isOpen}
        onClose={onClose}
    >
        <DialogTitle>掃除実績登録</DialogTitle>
        <DialogContent>
            <DialogContentText>
                あなたの掃除を記録します。
            </DialogContentText>
        </DialogContent>
        <BasicDialogActionButtons
            executionTitle="登録" cancelTitle="閉じる"
            onExecute={onClose}
            onCancel={onClose} />
    </Dialog>;

export default CleaningAchievementRegistrationDialog;
