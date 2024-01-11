import ExpenseItem from "./ExpenseItem";
import './DisplayExpense.css';
import React, {useState} from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function DisplayExpense(props){
    const [filterYear,setfilterYear]=useState("2022");
    const filterChangeHandler = selectedYear=>{
        setfilterYear(selectedYear);
        console.log(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(expense=>{
        return expense.date.getFullYear().toString() === filterYear;
    });
    
    
    return(
        <div>
           
        <Card className="expenses"> 
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
       <ExpensesChart expenses ={filteredExpenses}></ExpensesChart>
        <ExpenseList expense={filteredExpenses}></ExpenseList>
        </Card>
        </div>
    );
}
export default DisplayExpense;