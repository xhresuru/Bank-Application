import styles from "./transfer.module.css";
import React, { useState } from "react";

export function Transfer() {
  const [id, setId] = useState("");
  const [transfer, setTransfer] = useState("");
  const [transferto, setTransferTo] = useState("");

  const handle = () => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Transfer", transfer);
    localStorage.setItem("Transfer To", transferto);
  };
  return (
    <div className={styles.transCont}>
      <h1>Transfer Amount</h1>
      <form onSubmit={handle}>
        <input
          type="number"
          placeholder="Account Number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="number"
          placeholder="Transfer Amount"
          value={transfer}
          onChange={(e) => setTransfer(e.target.value)}
        />

        <input
          type="number"
          placeholder="Transfer To"
          value={transferto}
          onChange={(e) => setTransferTo(e.target.value)}
        />

        <div>
          <button onClick={handle}>Transfer</button>
        </div>
      </form>
    </div>
  );
}
