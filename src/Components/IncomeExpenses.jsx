import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let amount = transactions.map((transaction) => transaction.amount);

  let income = amount
    .filter((x) => x > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  let expense = (
    amount.filter((y) => y < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className='money minus'>${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
