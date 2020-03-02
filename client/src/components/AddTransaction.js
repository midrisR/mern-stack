import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const { addTransaction, error } = useContext(GlobalContext)
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const response = [...error];
    const errorResponse = response.reduce((val, cur) => ({ ...val, ...cur }), {})

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

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            text,
            amount: amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        className={`${getFieldError("text") ? "is-invalid" : ""}`}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                    {getMessageError("text")}
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        <small> (negative - expense, positive - income)</small>
                    </label>
                    <input
                        type="number"
                        className={`${getFieldError("amount") ? "is-invalid" : ""}`}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                    {getMessageError("amount")}
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
