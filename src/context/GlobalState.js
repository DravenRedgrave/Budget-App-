import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    incomeTransactions:[
    {id:1,incomeText:"Car sold",incomeAnmount:15000},
    {id:2,incomeText:"Salary",incomeAnmount:5000},
    {id:3,incomeText:"Bonus",incomeAnmount:13000}
    ],
    expenseTransactions:[
    {id:4,expenseText:"Rent",expenseAnmount:1000},
    {id:5,expenseText:"Bank",expenseAnmount:2000},
    {id:6,expenseText:"Clothes",expenseAnmount:500}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const addIncome = incomeTransactions => {
        dispatch({
            type:"ADD_INCOME",
            payload:incomeTransactions,
        });
    }

    const addExpense = expenseTransactions => {
        dispatch({
            type:"ADD_EXPENSE",
            payload:expenseTransactions,
        });
    }

    const deleteTransaction = (id) =>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id,
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeTransactions:state.incomeTransactions,
            expenseTransactions:state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}