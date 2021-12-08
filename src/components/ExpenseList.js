import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransactions'

const ExpenseList = () => {

    const {expenseTransactions} = useContext(GlobalContext);

    return (
        <div className="transactions transactions-expense">
            <h2>Transctoins History</h2>
            <ul className="transaction-list">
            {expenseTransactions.map(expenseTransaction =>(
                <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList
