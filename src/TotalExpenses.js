import React from "react";

function TotalExpenses({ expenses }) {
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  return <div className="total-expenses">Total Expenses: ${totalAmount}</div>;
}

export default TotalExpenses;
