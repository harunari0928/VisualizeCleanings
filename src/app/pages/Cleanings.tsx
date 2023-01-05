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
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

export function Cleanings() {
    const [isAddDialogOpen, setAddDialogOpen] = useState(false);
    const [isRemoveDialogOpen, setRemoveDialogOpen] = useState(false);
    let contents = [...Array(16)];
    for (let i = 0; i < 3 - [...Array(16)].length % 3; i++) {
        contents.push('');
    }

    const [occurrence, setOccurrence] = React.useState('everyday');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOccurrence(event.target.value);
    };

    const addDialogOpen = () => {
        setOccurrence('everyday');
        setAddDialogOpen(true);
    };

    return <div>
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
            sx={{ position: 'absolute', bottom: 50, left: 100, borderRadius: 28 }}
            onClick={addDialogOpen}>
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
                <FormControl sx={{ marginTop: '1rem' }}>
                    <FormLabel>タイトル</FormLabel>
                    <TextField variant="standard" />
                    <FormLabel sx={{ marginTop: '1rem' }}>難易度</FormLabel>
                    <TextField
                        variant="standard"
                        type="number"
                        sx={{ width: '4rem' }}
                        InputProps={{
                            inputProps: { min: 1, max: 50 },
                            'aria-label': 'Without label',
                            endAdornment: <InputAdornment position="end">pt</InputAdornment>,
                        }}
                    />
                    <FormLabel sx={{ marginTop: '1rem' }}>発生頻度</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="frequency-of-occurrence-group-label"
                        name="frequency-of-occurrence-group"
                        defaultValue="everyday"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="everyday" control={<Radio />} label="毎日" />
                        <FormControlLabel value="byMonth" control={<Radio />} label="日付ごと" />
                        <FormControlLabel value="byDayOfWeek" control={<Radio />} label="曜日ごと" />
                    </RadioGroup>
                    {(() => {
                        if (occurrence === 'byMonth') {
                            return <FormControl sx={{ marginTop: '1rem', width: '4rem' }}>
                                <TextField
                                    variant="standard"
                                    type="number"
                                    InputProps={{
                                        inputProps: { min: 0, max: 31 },
                                        'aria-label': 'Without label',
                                        endAdornment: <InputAdornment position="end">日</InputAdornment>,
                                    }}
                                />
                            </FormControl>;
                        } else if (occurrence === 'byDayOfWeek') {
                            return <FormControl variant="standard" sx={{ marginTop: '1rem', width: '4rem' }}>
                                <Select
                                    label="dayOfWeek"
                                    defaultValue={0}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >{['日', '月', '火', '水', '木', '金', '土'].map((d, i) => <MenuItem value={i}>{d}</MenuItem>)}
                                </Select>
                            </FormControl>;
                        }
                    })()}
                    <FormLabel sx={{ marginTop: '1rem' }}>備考</FormLabel>
                    <TextField
                        multiline
                        maxRows={4}
                        variant="standard"
                    />
                </FormControl>
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
    </div>;
}

