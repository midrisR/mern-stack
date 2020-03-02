import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial state
const initialState = {
    transactions: [],
    error: [],
    data: [],
    loading: true,
    success: localStorage.getItem('token') ? true : false,
    login: {
        status: '',
        error: []
    }
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const token = localStorage.getItem('token')

    const auth = {
        headers: {
            'Authorization': token
        }
    }

    // action
    async function getTransactions() {
        try {
            const res = await axios.get('http://localhost:5000/api/v2/', auth);
            setTimeout(() => {
                dispatch({
                    type: 'GET_TRANSACTIOS',
                    payload: res.data.data
                });
            }, 1000);
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data
            })
        }
    }


    async function deleteTransaction(id) {
        try {
            await axios.delete(`http://localhost:5000/api/v2/${id}`, auth)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data
            })
        }

    }

    async function addTransaction(transactions) {
        try {
            const res = await axios.post('http://localhost:5000/api/v2/', transactions, auth)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data
            })
        }
    }

    async function authLogin(data) {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/api/v1/login', data, config)
            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
            localStorage.setItem('token', res.data.data);
        } catch (err) {
            console.log(err.response)
            dispatch({
                type: 'LOGIN_ERROR',
                payload: err.response.data,
                status: err.response.status
            })
        }
    }

    async function Logout() {
        try {
            await localStorage.removeItem('token')
            dispatch({
                type: 'LOGOUT',
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                error: state.error,
                loading: state.loading,
                success: state.success,
                getTransactions,
                deleteTransaction,
                addTransaction,
                authLogin,
                login: state.login,
                Logout
            }} >
            {children}
        </GlobalContext.Provider>
    )
}