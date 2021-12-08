import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import IncomeTransactions from './IncomeTransactions';

const InomentList = () => {

    const {incomeTransactions} = useContext(GlobalContext);

    return (
        <div className="transactions transactions-income">
            <h2>Transctoins History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(incomeTransaction =>(
                <IncomeTransactions key={incomeTransaction.id} incomeTransaction={incomeTransaction}/>
                ))}
            </ul>
        </div>
    )
}

export default InomentList
