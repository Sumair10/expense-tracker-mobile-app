import { createContext, useReducer } from "react";

const DUMMY_EXPENSES =[
    {
        id : 'e1',
        description : 'A pair of shoes',
        amount : 59.99,
        date : new Date('2021-12-19')
    },
    {
        id : 'e2',
        description : 'A pair of banana',
        amount :12.9232329,
        date : new Date('2021-02-30')
    },
    {
        id : 'e3',
        description : 'A brand new House',
        amount :4.99,
        date : new Date('2023-12-09')
    },
    {
        id : 'e4',
        description : 'a new Book',
        amount :100.99,
        date : new Date('2022-02-22')
    },
]


export const ExpensesContext = createContext({
    expenses : [],
    addExpense :({description , amount , date})=>{},
    deleteExpense :(id)=>{},
    updateExpense :(id ,{ description , amount , date})=>{},

})

const expensesReducer  =(state, action) =>{
    switch (action.type){
        case 'ADD':
            const id =new Date().toString() + Math.random().toString()
            return [ {...action.payload , id : id} ,...state]
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex((expense)=>expense.id === action.payload.id)
            const updateableExpense = state[updateableExpenseIndex]
            const updatedItem ={...updateableExpense , ...action.payload.data}
            const updatedArray =[...state]
            updatedArray[updateableExpenseIndex] = updatedItem
            return updatedArray
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)
        default:
            return state
    }
}

function ExpensesContextProvider ({children}){

    const [expensesState , dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES )

    const addExpense =(expenseData)=>{
        dispatch({type :'ADD', payload :expenseData})
    }

    const deleteExpense =(id)=>{
        dispatch({type :'DELETE', payload :id})
    }

    const updateExpense =(id, expenseData)=>{
        dispatch({type :'ADD', payload :{id :id , data :expenseData}})
    }

    const value ={
        expenses : expensesState,
        addExpense:addExpense,
        updateExpense:updateExpense,
        deleteExpense:deleteExpense
    }


    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider