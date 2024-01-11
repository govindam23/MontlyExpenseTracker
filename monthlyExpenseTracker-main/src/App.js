import DisplayExpense from "./components/DisplayExpense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses,setExp]= useState(Dummy_Expenses)
  
  function addExpenseHandler(expense){

    setExp((prevExpense)=>{
      return [expense,...prevExpense];
    });

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <DisplayExpense expenses={expenses}></DisplayExpense>
    </div>
  );
}

export default App;
