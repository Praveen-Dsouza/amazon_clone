import React, { useState } from 'react';
import '../Styles/Components/Login.scss';
import { Link } from 'react-router-dom';
import InputField from './Common/InputField';
import Button from './Common/Button';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
                .then((auth) => {
                        navigate('/')
                    
                })
                .catch((error) => alert(error.message))    
    }

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    if (auth) {
                        navigate('/')
                    }
                })
                .catch((error) => alert(error.message))
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
                        id='email'
                        type='email' 
                        class='loginForm_input' 
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)} 
                        required={true} />
                    <h5 className='loginForm_header'>Password</h5>
                    <InputField 
                        id='password'
                        type='password'  
                        class='loginForm_input' 
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)} 
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
