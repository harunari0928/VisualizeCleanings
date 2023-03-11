import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useBackend } from '../contexts/BackendContext';

const TopGrid = styled(Grid)(({ }) => ({
    marginTop: '40vh',
}));

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Signup = () => {
    let inputUserName = '';
    const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputUserName = e.target.value;
    };
    const query = useQuery();
    const navigate = useNavigate();
    const { authApiClient } = useBackend();
    const onRegisterClick = async () => {
        const { situation } = await authApiClient.signup({
            signupInfo: {
                token: JSON.parse(query.get('token') ?? '{}'),
                userName: inputUserName,
            }
        });
        switch (situation) {
            case 'Succeeded':
                navigate('/top');
                break;
            default:
                navigate('/');
                break;
        }
    };
    return <TopGrid container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={6}>
            <Stack
                alignItems='center'
                direction={{ xs: 'column', sm: 'column' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
                <TextField label='ニックネーム' variant='outlined' onChange={onUserNameChange} sx={{ maxWidth: '15rem' }} />
                <Button variant='contained' onClick={onRegisterClick} sx={{ maxWidth: '5rem' }}>登録</Button>
            </Stack>
        </Grid>
        <Grid item xs={3} />
    </TopGrid>;
};

export default Signup;
