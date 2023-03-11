import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';
import DayOfWeekSelector from '../atoms/DayOfWeekSelector';
import DaySelector from '../atoms/DaySelector';

export type Occurrence = 'everyday' | 'byMonth' | 'byDayOfWeek';

type Props = {
    setOccurrence: (o: Occurrence) => void,
    occurrence: Occurrence,
    sx?: SxProps<Theme>,
};

const OccurrenceDetailForm = ({ occurrence }: { occurrence: Occurrence }) => {
    const marginBetweenForms = { marginTop: '1rem' };
    switch (occurrence) {
        case 'byMonth':
            return <DaySelector sx={marginBetweenForms} />;
        case 'byDayOfWeek':
            return <DayOfWeekSelector sx={marginBetweenForms} />;
        default:
            return <></>;
    }
};

const OccurrenceForm = ({ setOccurrence, occurrence, sx }: Props) =>
    <>
        <FormControl sx={{ ...sx }} required>
            <FormLabel>発生頻度</FormLabel>
            <RadioGroup
                row
                aria-labelledby='frequency-of-occurrence-group-label'
                name='frequency-of-occurrence-group'
                defaultValue='everyday'
                onChange={e => setOccurrence(e.target.value as Occurrence)}
            >
                {[
                    ['everyday', '毎日'],
                    ['byMonth', '日付ごと'],
                    ['byDayOfWeek', '曜日ごと'],
                ].map(([v, l]) =>
                    <FormControlLabel value={v} control={<Radio />} label={l} />)}
            </RadioGroup>
        </FormControl>
        <OccurrenceDetailForm occurrence={occurrence} />
    </>;

export default OccurrenceForm;
