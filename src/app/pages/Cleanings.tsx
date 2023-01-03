import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export function Cleanings() {
    const [isAddDialogOpen, setAddDialogOpen] = useState(false);
    const [isRemoveDialogOpen, setRemoveDialogOpen] = useState(false);
    let contents = [...Array(16)];
    for (let i = 0; i < 3 - [...Array(16)].length % 3; i++) {
        contents.push('');
    }
    
    return (<Grid>
        <Container sx={{
            height: 'calc(100vh - 5rem)',
            overflowY: 'scroll',
        }}>
            <Grid container spacing={2} justifyContent="center">
                {contents.map(_ => (
                    <Grid item md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">詳細</Button>
                                <IconButton aria-label="delete">
                                    <DeleteIcon onClick={() => setRemoveDialogOpen(true)} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>))}
            </Grid>
        </Container>
        <Button
            variant="contained"
            sx={{ position: 'absolute', bottom: 16, left: 16, borderRadius: 28 }}
            onClick={() => setAddDialogOpen(true)}>
            <AddIcon />登録
        </Button>
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={isAddDialogOpen}
            onClose={() => setAddDialogOpen(false)}
        >
            <DialogTitle>掃除登録</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    掃除を登録します。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setAddDialogOpen(false)}>登録</Button>
                <Button onClick={() => setAddDialogOpen(false)} autoFocus>
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={isRemoveDialogOpen}
            onClose={() => setRemoveDialogOpen(false)}
        >
            <DialogTitle>掃除削除</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    掃除を削除します。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setRemoveDialogOpen(false)}>削除</Button>
                <Button onClick={() => setRemoveDialogOpen(false)} autoFocus>
                    キャンセル
                </Button>
            </DialogActions>
        </Dialog>
    </Grid>);
}

