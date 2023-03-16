import React, { useState } from 'react';
import '../Styles/Components/Login.scss';
import { Link } from 'react-router-dom';
import InputField from './Common/InputField';
import Button from './Common/Button';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = (value) => setEmail(value)
    const handlePassword = (value) => setPassword(value)
    
    const signIn = (e) => {
        e.preventDefault();

        // Sign in logic
    }
    const register = (e) => {
        e.preventDefault();

        // register logic
    }

    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className='login_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='amazon logo'
                />
            </Link>

            <div className="login_container">
                <h1 className='login_header'>Sign in</h1>
                <form>
                    <h5 className='loginForm_header'>Email</h5>
                    <InputField 
                        class='loginForm_input' 
                        type='text' 
                        value={email} 
                        onInputValueChange={handleEmail} 
                        required={true} />
                    <h5 className='loginForm_header'>Password</h5>
                    <InputField 
                        class='loginForm_input' 
                        type='password'  
                        value={password} 
                        onInputValueChange={handlePassword} 
                        required={true} />
                    <Button type='submit' class='full_widthButton' text='Sign In' handleClick={signIn} />
                </form>
                <p className='login_warning'>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please aee our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Button class='login_registerButton full_widthButton' text='Create your Amazon Account' handleClick={register} />
            </div>
        </div>
    )
}

export default Login
