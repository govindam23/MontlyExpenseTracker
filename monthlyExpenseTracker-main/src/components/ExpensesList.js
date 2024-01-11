import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props){

    if(props.expense.length === 0){
        return <h2 className="expense-list__fallback">No Expense found</h2>
    }
    return <ul className="expenses-list">
        {props.expense.map((item)=>(<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>))}

    </ul>

}
export default ExpenseList;