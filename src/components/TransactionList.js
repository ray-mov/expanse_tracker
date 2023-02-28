import React, { useContext } from "react";
import TransactionCard from "./TransactionCard";

import { GlobalContext } from "../Context/Context";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>History</p>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionCard
            id={transaction.id}
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
