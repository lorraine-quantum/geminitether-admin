import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        login({ username, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='title'>
                <h1>Gemini.</h1>
            </div>
            <input
                name="username"
                placeholder='username'
                className='user-name'
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
            className='pass-word'
                name="password"
                placeholder='password'
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                
            />
            <button type='submit'>submit</button>
        </form>
    );
};

export default MyLoginPage;