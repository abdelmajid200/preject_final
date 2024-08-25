import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('auth-token', 'authenticated'); 
            localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
            navigate('/admin/dashboard'); 
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <h1>Login</h1>
                <div className='login-field'>
                    <input
                        className='login-field input'
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className='login-field input'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
