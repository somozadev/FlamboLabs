import React, { useEffect, useRef, useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { IconButton } from '@mui/material';
import Switch from '@mui/material/Switch';
import WalletButton from './WalletButton';

const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        handleGoogleSingin,
        clearErrors,
        webTypeSwitch,
        handleSwitchChange } = props;

    const [walletButtonState, setWalletButtonState] = useState(false);

    const handleWalletClick = event => {
        console.log('textcontent: ', event.currentTarget.textContent);
        if (event.currentTarget.classList.contains('wallet-adapter-dropdown')) {
            console.log('wallet is connected');
            setWalletButtonState(true);
        }
        else {
            console.log('wallet is NOT connected');
            setWalletButtonState(false);
        }
    };
    return (
        <>
            {hasAccount ? (<></>) : (<>
                <div className={webTypeSwitch ? 'select-web-type-web3' : 'select-web-type-web2'}>
                    <p>{webTypeSwitch ? 'web3' : 'web2'}</p>
                    <Switch checked={webTypeSwitch} size="large" onClick={handleSwitchChange} color='secondary' name='switch' about='test' inputProps={{ "arial-label": "web3/web2" }} />
                </div></>)}

            <section className='login'>
                {webTypeSwitch ? (<>
                    <div className='login-container'>
                        {/* <label>Register with wallet</label> */}
                        {<p>{String(walletButtonState)}</p>}
                        <WalletButton />
                    </div>

                </>) : (<>
                    {hasAccount ? (<>
                        <div className='login-container'>
                            <label>Username</label>
                            <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                            <p className='error-msg'>{emailError}</p>
                            <label>Password</label>
                            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <label>Confirm Password</label>
                            <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            <p className='error-msg'>{passwordError}</p>
                            <div className='google-button-container'>
                                <button onClick={handleSignup} className='google-button-container-left-btn'>Register</button>
                                <IconButton className='google__icon' color="secondary" onClick={handleGoogleSingin}>
                                    <GoogleIcon fontSize='large' />
                                </IconButton>
                            </div>
                            <p>Have an account? <span onClick={() => { setHasAccount(!hasAccount); clearErrors() }}>Login</span></p>
                        </div>
                    </>) : (<>
                        <div className='login-container'>
                            <label>Username</label>
                            <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                            <p className='error-msg'>{emailError}</p>
                            <label>Password</label>
                            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <p className='error-msg'>{passwordError}</p>
                            <div className='google-button-container'>
                                <button onClick={handleLogin} className='google-button-container-left-btn'>Login</button>
                                <IconButton className='google__icon' color="secondary" onClick={handleGoogleSingin}>
                                    <GoogleIcon fontSize='large' />
                                </IconButton>
                            </div>
                            <p>Don't have an account?<span onClick={() => { setHasAccount(!hasAccount); clearErrors() }}>Register</span></p>
                        </div>
                    </>)}
                </>)}


            </section>
        </>
    )
}

export default Login;