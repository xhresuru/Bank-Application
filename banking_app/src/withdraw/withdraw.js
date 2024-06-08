import styles from "./withdraw.module.css";
import React, { useState } from "react";

export function Withdraw() {
  const [id, setId] = useState("");
  const [withdraw, setWithdraw] = useState("");

  const handle = () => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Withdraw", withdraw);
  };

  return (
    <div className={styles.withCont}>
      <h1>Withdraw Amount</h1>
      <form onSubmit={handle}>
        <input
          type="number"
          placeholder="Account Number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="number"
          placeholder="Withdraw Amount"
          value={withdraw}
          onChange={(e) => setWithdraw(e.target.value)}
        />

        <div>
          <button onClick={handle}>Withdraw</button>
        </div>
      </form>
    </div>
  );
}
