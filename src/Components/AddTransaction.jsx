import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  let transactionSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={transactionSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>text</label>
          <input
            type='text'
            placeholder='Enter text...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount....'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className='btn'>Add transaction</button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
