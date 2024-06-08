import styles from "./deposit.module.css";
import React, { useState } from "react";

export function Deposit() {
  const [id, setId] = useState("");
  const [depo, setDeposit] = useState("");

  const handle = () => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Deposite", depo);
  };
  return (
    <div className={styles.depCont}>
      <h1>Deposit Amount</h1>
      <form onSubmit={handle}>
        <input
          type="number"
          placeholder="Account Number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="number"
          placeholder="Deposite Amount"
          value={depo}
          onChange={(e) => setDeposit(e.target.value)}
        />

        <div>
          <button onClick={handle}>Deposit</button>
        </div>
      </form>
    </div>
  );
}
