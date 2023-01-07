import React, { useState } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CleaningCard from '../components/atoms/CleaningCard';
import RegisterButton from '../components/atoms/RegisterButton';
import RegisterCleaningDialog from '../components/organisms/RegisterCleaningDialog';
import RemoveItemDialog from '../components/organisms/RemoveItemDialog';

export function Cleanings() {
    const [isAddDialogOpen, setAddDialogOpen] = useState(false);
    const [isRemoveDialogOpen, setRemoveDialogOpen] = useState(false);
    let contents = [...Array(16)];
    for (let i = 0; i < 3 - [...Array(16)].length % 3; i++) {
        contents.push('');
    }

    return <div>
        <Container sx={{
            height: 'calc(100vh - 5rem)',
            overflowY: 'scroll',
        }}>
            <Grid container spacing={2} justifyContent="center">
                {contents.map(_ => (
                    <Grid item md={4}>
                        <CleaningCard onDelete={() => setRemoveDialogOpen(true)} />
                    </Grid>))}
            </Grid>
        </Container>
        <RegisterButton onClick={() => setAddDialogOpen(true)} />
        <RegisterCleaningDialog
            isOpen={isAddDialogOpen}
            setOpen={setAddDialogOpen} />
        <RemoveItemDialog
            title="掃除削除"
            message="掃除を削除します。"
            isOpen={isRemoveDialogOpen}
            setOpen={setRemoveDialogOpen} />
    </div>;
}

