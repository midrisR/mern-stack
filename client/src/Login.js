import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './context/GlobalState';
import { useHistory } from "react-router-dom";

function Login() {
    const { authLogin, login, success } = useContext(GlobalContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const err = []

    if (login.status === 422) {
        err.push(...login.error);
    } else {
        err.push(login.error.message)
    }

    const errorResponse = err.reduce((val, cur) => ({ ...val, ...cur }), {})

    const getFieldError = (field) => {
        return !!errorResponse[field];
    }

    const getMessageError = (field) => {
        if (getFieldError(field)) {
            return (
                <small style={{ color: 'red', fontStyle: 'italic' }}> {errorResponse[field][0]} </small>
            );
        }
    }

    const isLogin = (e) => {
        e.preventDefault()
        const newData = {
            email: email,
            password: password
        }
        authLogin(newData)
    };

    useEffect(() => {
        if (success === true) {
            history.push("/home");
        }
    })

    const Alert = () => {
        return (
            <div style={{ background: '#ff9085', padding: '2px' }}>
                <h5 style={{ color: '#fff', textAlign: 'center' }}> {login.error.message}</h5>
            </div>
        );
    }

    return (
        <div className="container">
            {login.status === 400 ? (<Alert />) : ''}
            <h3>Add new transaction</h3>
            <form onSubmit={isLogin}>
                <div className="form-control">
                    <input
                        type="text"
                        className={`${getFieldError("email") ? "is-invalid" : ""}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email..."
                    />
                    {getMessageError("email")}
                </div>
                <br />
                <div className="form-control">
                    <input
                        type="text"
                        className={`${getFieldError("password") ? "is-invalid" : ""}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password..."
                    />
                    {getMessageError("password")}
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login
