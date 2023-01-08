import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

declare global {
    const google: typeof import('google-one-tap');
}

const Login = () => {
    const navigator = useNavigate();
    const handleGoogle = async (payload: unknown) => {
        await fetch('http://localhost:45612/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload),
        });
        navigator('/top');
    };

    useEffect(() => {
        if (!process.env.GOOGLE_CLIENT_ID) {
            throw new Error("the enviroment variable is not set.");
        }

        google.accounts.id.initialize({
            client_id: process.env.GOOGLE_CLIENT_ID,
            callback: handleGoogle,
        });

        const signUpButton = document.getElementById("signUpDiv");
        if (!signUpButton) {
            throw new Error('the element for sign up is not set.')
        }

        google.accounts.id.renderButton(signUpButton, {
            theme: "filled_black",
            text: "continue_with",
            shape: "pill",
        });
    }, [handleGoogle]);

    return (
        <>
            <main
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div id="signUpDiv" data-text="signup_with"></div>
            </main>
        </>
    );
};

export default Login;
