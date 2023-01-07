import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from "@mui/material/Stack";
import DifficultyForm from '../atoms/DifficultyForm';
import RemarksForm from '../atoms/RemarksForm';
import TitleForm from '../atoms/TitleForm';
import BasicDialogActionButtons from '../atoms/BasicDialogActionButtons';
import OccurrenceForm, { Occurrence } from '../moleculars/OccurrenceForm';

type Props = {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
};

const marginBetweenForms = { marginTop: '1rem' };

const RegisterCleaningDialog = ({ isOpen, setOpen }: Props) => {
    const [occurrence, setOccurrence] = useState<Occurrence>('everyday');

    return <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={isOpen}
        onClose={() => {
            setOpen(false);
            setOccurrence('everyday');
        }}
    >
        <DialogTitle>掃除登録</DialogTitle>
        <DialogContent>
            <DialogContentText>掃除を登録します。</DialogContentText>
            <Stack>
                <TitleForm sx={marginBetweenForms} />
                <DifficultyForm sx={marginBetweenForms} />
                <OccurrenceForm
                    sx={marginBetweenForms}
                    setOccurrence={setOccurrence}
                    occurrence={occurrence} />
                <RemarksForm sx={marginBetweenForms} />
            </Stack>
        </DialogContent>
        <BasicDialogActionButtons
            executionTitle="登録" cancelTitle="キャンセル"
            onExecute={() => setOpen(false)}
            onCancel={() => setOpen(false)} />
    </Dialog >;
};

export default RegisterCleaningDialog;
