import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]= useState(false)
    const login = useLogin();
    const notify = useNotify();
    const returnError=()=>{
        notify("Invalid Credentials"),
        setLoading(false)
    }
    const handleSubmit = async (e) =>  {
        e.preventDefault();
        setLoading(true)
        login({ username, password }).catch(() =>
            returnError()
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
            <button className={loading?'loading':''} type='submit'>{loading?'Loading. . .':"submit"}</button>
        </form>
    );
};

export default MyLoginPage;