import { CredentialResponse } from 'google-one-tap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBackend } from '../contexts/BackendContext';

declare global {
    const google: typeof import('google-one-tap');
}

const Login = () => {
    const navigate = useNavigate();
    const { authApiClient } = useBackend();
    const handleGoogle = async (credentialResponse: CredentialResponse) => {
        const { situation } = await authApiClient.login({ loginInfo: credentialResponse })
        switch (situation) {
            case 'Succeeded':
                navigate('/top');
                break;
            case 'NotRegistered':
                navigate(`/signup?token=${JSON.stringify(credentialResponse)}`);
                break;
            default:
        }
    };

    
    useEffect(() => {
        if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
            throw new Error('the enviroment variable is not set.');
        }

        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleGoogle,
        });

        const signUpButton = document.getElementById('signUpDiv');
        if (!signUpButton) {
            throw new Error('the element for sign up is not set.')
        }

        google.accounts.id.renderButton(signUpButton, {
            theme: 'filled_black',
            text: 'continue_with',
            shape: 'pill',
        });
    }, [handleGoogle]);

    return (
        <>
            <main
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div id='signUpDiv' data-text='signup_with'></div>
            </main>
        </>
    );
};

export default Login;
