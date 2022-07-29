import React, { useState, useEffect } from 'react'
import './Home.css'
import Login from './components/Login';
import firebaseApp from './Firebase';
import { singinWithGoogle } from './Firebase';


export default function Home(props) {
    const { user, setUser } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [webTypeSwitch, setwebTypeSwitch] = useState(false);

    const handleSwitchChange = () => {
        clearErrors();
        setwebTypeSwitch(!webTypeSwitch);
    }
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
    const handleLogin = () => {
        clearErrors();
        firebaseApp.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            })
    };
    const handleSignup = () => {
        clearErrors();
        if (password !== confirmPassword) {
            setPasswordError('passwords must be the same.');
            return;
        }
        firebaseApp.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            })
    };
    const handleLogout = () => {
        firebaseApp.auth().signOut();
    };
    const authListener = () => {
        console.debug(user);
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);



    return (
        <div className='home-container'>

            {
                user ? (
                    <button onClick={handleLogout}> logout </button>
                ) : (
                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                        handleGoogleSingin={singinWithGoogle}
                        clearErrors={clearErrors}
                        webTypeSwitch={webTypeSwitch}
                        handleSwitchChange = {handleSwitchChange}
                    />
                )
            }
        </div >
    )
}
