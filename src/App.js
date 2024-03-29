import React, { useState } from "react";
import ExpenseInputForm from "./ExpenseInputForm";
import ExpenseList from "./ExpenseList";
import TotalExpenses from "./TotalExpenses";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() },
    ]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Money Tracker App</h1>
      <ExpenseInputForm onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
      <TotalExpenses expenses={expenses} />
    </div>
  );
}

export default App;
