import React, { useState, useEffect, useContext } from "react";
import "./Component.css";
import { GlobalContext } from "../Context/Context";

function Header() {
  const [balance, setBalance] = useState(1000);
  const { transactions } = useContext(GlobalContext);

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    setBalance(total);
  }, [transactions]);
  return (
    <div className="header">
      <h2>Expanse Tracker</h2>
      <div className="balance-container">
        <p>Your Balance : </p>
        <span>₹{balance}</span>
      </div>
    </div>
  );
}

export default Header;
