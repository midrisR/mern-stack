import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
    const { success, Logout } = useContext(GlobalContext)
    const history = useHistory();

    const onLogout = (e) => {
        e.preventDefault();
        Logout()
    }
    useEffect(() => {
        if (success === false) {
            return history.push('/')
        }
    })


    return (
        <>
            <button className="btn" onClick={onLogout}>Logout</button>
            <h2>Expense Tracker</h2>
        </>
    )
}
