import React, { useState } from "react";

function ExpenseInputForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onAddExpense({ name, amount: Number(amount) });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense Name"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseInputForm;
