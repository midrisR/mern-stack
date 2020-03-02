import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from '../components/Transaction'

import { css } from "@emotion/core";
// First way to import
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



export const TransactionList = () => {
    const { transactions, getTransactions, loading } = useContext(GlobalContext)

    const IsLoading = () => {
        return (
            <div className="sweet-loading">
                <HashLoader
                    css={override}
                    size={40}
                    //size={"150px"} this also works
                    color={"#123abc"}
                    loading={loading}
                />
            </div>
        )
    }

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <h3>History</h3>
            {loading ? (<IsLoading />) : ''}
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction._id}
                        transaction={transaction}
                    />
                ))}

            </ul>
        </div>
    )
}
