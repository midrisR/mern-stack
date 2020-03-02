import React, { useEffect } from 'react'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpanses } from './components/IncomeExpanses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './index.css';

function App() {
  useEffect(() => {
    document.title = 'Halaman Home';
  });
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpanses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  )
}

export default App