import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
    const [title,setTitle]=useState('');
    const [amt,setamt]=useState('');
    const [date1,setdate]=useState('');


    function titleChangeHandler(event){
        setTitle(event.target.value);

    }
    function amtChangeHandler(event){
        setamt(event.target.value);
    }

    function dateChangeHandler(event){
        setdate(event.target.value);

    }
    function submitHandler(event){
        event.preventDefault();
        const expenseData={
            title:title,
            amount:+
            amt,
            date:new Date(date1)
        };
        props.onSaveExpenseData(expenseData);
        setTitle(" ");
        setamt(" ");
        setdate(" ");

    }
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={amt} min="0.01" step="0.01"  onChange={amtChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'value={date1} min="2022-01-01" max='2023-12-31 ' onChange={dateChangeHandler}></input>
            </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
   
    </form>
    );

}
export default ExpenseForm;