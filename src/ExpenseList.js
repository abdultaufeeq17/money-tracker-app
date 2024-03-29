import React from "react";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {`${expense.name}: $${expense.amount}`}
          <button
            onClick={() => onDeleteExpense(expense.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
