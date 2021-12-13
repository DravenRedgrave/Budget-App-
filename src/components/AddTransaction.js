import React,{useState,useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext, } from '../context/GlobalState';

const AddTransaction = () => {
    const {addIncome,addExpense} = useContext(GlobalContext)

    const [income,setIncome] = useState({
        incomeText:"",
        incomeAnmount:0,
    });

    const {incomeText,incomeAnmount} = income

    const onChangeIncome = (e) => {
        setIncome({...income,[e.target.name]:e.target.value});
    }

    const onSubmitIncome = (e) => {
        e.preventDefault();

        const newIncomeTransaction = {
            id:uuidv4(),
            incomeText,
            incomeAnmount:incomeAnmount * 1,
        };
        addIncome(newIncomeTransaction)

        setIncome({
            incomeText:'',
            incomeAnmount:0
        })
    }

    /////
    const [expense,setExpense] = useState({
        expenseText:"",
        expenseAnmount:0,
    });

    const {expenseText,expenseAnmount} = expense

    const onChangeExpense = (e) => {
        setExpense({...expense,[e.target.name]:e.target.value});
    }

    const onSubmitExpense = (e) => {
        e.preventDefault();

        const newExpenseTransaction = {
            id:uuidv4(),
            expenseText,
            expenseAnmount:expenseAnmount * 1,
        };
        addExpense(newExpenseTransaction)

        setExpense({
            expenseText:'',
            expenseAnmount:0
        })
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text" value={incomeText} name="incomeText"  placeholder="Add Income" autoComplete="off" onChange={onChangeIncome}/>
                    <input type="number" value={incomeAnmount} name="incomeAnmount" placeholder="Anmount" autoComplete="off" onChange={onChangeIncome}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text" name="expenseText" value={expenseText} placeholder="Add Expense" autoComplete="off" onChange={onChangeExpense}/>
                    <input type="number" name="expenseAnmount" value={expenseAnmount} placeholder="Anmount" autoComplete="off" onChange={onChangeExpense}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
