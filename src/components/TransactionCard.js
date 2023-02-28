import React, { useContext } from "react";
import "./Component.css";
import { GlobalContext } from "../Context/Context";

function TransactionCard({ id, text, amount }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="transaction-card">
      <span>{text}</span>
      <span style={{ color: amount < 0 ? "red" : "green" }}>{amount}</span>
      <button className="deleteBtn" onClick={() => deleteTransaction(id)}>
        X
      </button>
    </div>
  );
}

export default TransactionCard;
