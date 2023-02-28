import React, { useState, useContext } from "react";
import "./Component.css";
import { GlobalContext } from "../Context/Context";
function AddTransaction() {
  const [text, setText] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (income > 0 && expense > 0) {
      window.prompt("Either Enter Income or Expense");
    } else if (income < 0 && expense < 0) {
      window.prompt("Either Enter Income or Expense");
    } else {
      if (income > 0 && expense === 0) {
        setAmount(income);
      } else {
        const a = String("-" + expense);
        const b = Number(a);
        setAmount(b);
      }
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount,
      };

      addTransaction(newTransaction);
    }
  };

  return (
    <>
      <h3 style={{ marginTop: "5px" }}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h3>Trasaction</h3>
          <input
            type="text"
            min={0}
            max={10000000}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <h3>Income</h3>
          <input
            style={{ marginLeft: "40px" }}
            type="number"
            min={0}
            max={10000000}
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <h3>Expanse</h3>
          <input
            style={{ marginLeft: "30px" }}
            type="number"
            min="0"
            max={10000000}
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
