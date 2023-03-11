import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

type Props = {
    onDelete: () => void,
};

const CleaningCard = ({ onDelete }: Props) =>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image='/static/images/cards/contemplative-reptile.jpg'
            title='green iguana' />
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
                Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>詳細</Button>
            <IconButton aria-label='delete'>
                <DeleteIcon onClick={onDelete} />
            </IconButton>
        </CardActions>
    </Card>;

export default CleaningCard;
