import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/Context";

function Tracker() {
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const { transactions } = useContext(GlobalContext);

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const inco = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0);

    const expe =
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1;

    setIncome(inco);
    setExpenses(expe);
  }, [transactions]);

  return (
    <div className="tracker-container">
      <div>
        Income
        <span style={{ display: "block", textAlign: "center", color: "green" }}>
          {income}
        </span>
      </div>
      <div style={{ borderLeft: "1px solid gray", height: "50px" }}></div>
      <div>
        Expanse
        <span style={{ display: "block", textAlign: "center", color: "red" }}>
          {expenses}
        </span>
      </div>
    </div>
  );
}

export default Tracker;
