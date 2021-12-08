import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {

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
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text" name="incomeText"  placeholder="Add Income" autoComplete="off" onChange={onChangeIncome}/>
                    <input type="number" name="incomeAnmount" placeholder="Anmount" autoComplete="off" onChange={onChangeIncome}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Add Expense" autoComplete="off"/>
                    <input type="number" placeholder="Anmount" autoComplete="off"/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
