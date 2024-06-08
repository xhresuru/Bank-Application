import styles from "./new-customer.module.css";
import React, { useState } from "react";

export function NewCustomer() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [depo, setDeposit] = useState("");

  const handle = () => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Deposite", depo);
  };

  return (
    <div className={styles.custCont}>
      <h1>Create New Customer</h1>
      <form onSubmit={handle}>
        <input
          type="number"
          placeholder="Account Number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="text"
          placeholder=" Account Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Initial Deposite"
          value={depo}
          onChange={(e) => setDeposit(e.target.value)}
        />

        <div>
          <button onClick={handle}>Done</button>
        </div>
      </form>
    </div>
  );
}
