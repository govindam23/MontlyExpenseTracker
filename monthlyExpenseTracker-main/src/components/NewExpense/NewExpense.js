import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const [isEditing, setIsEditing]=useState(false);
    function saveExpenseDataHandler(enterdata){
        const expenseData={
            ...enterdata,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);


    }
    const startingEditing =() =>{
        setIsEditing(true);
    };
    const stopEditing =() =>{
        setIsEditing(false);
    };
    return <div className='new-expense'>
      {!isEditing && <button onClick={startingEditing}>Add New Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>}
    </div>

}
export default NewExpense;