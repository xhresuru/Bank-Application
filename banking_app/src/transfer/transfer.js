import React, { useState, useEffect } from "react";
import styles from "./transfer.module.css";

export function Transfer() {
  const [accounts, setAccounts] = useState([]);
  const [sourceAccount, setSourceAccount] = useState("");
  const [sourcename, setSourcename] = useState("");
  const [distinationname, setdistinationname] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Fetch accounts data from local storage
    const accountsData = localStorage.getItem("depo");
    if (accountsData) {
      setAccounts(JSON.parse(accountsData));
    }
  }, []); // This effect runs only once after the component mounts

  // const uniqueData = Array?.from(
  //   new Set(accounts?.map((item) => item?.acc_id))
  // ).map((acc_id) => accounts?.find((obj) => obj?.acc_id === acc_id));

  const handleSourceAccountChange = (e) => {
    const selectedAccountId = e.target.value;
    setSourceAccount(selectedAccountId);
    const selectedAccount = accounts.find(
      (account) => account.acc_id === selectedAccountId
    );
    setSourcename(selectedAccount ? selectedAccount.name : "");
  };

  const handleDestinationAccountChange = (e) => {
    const selectedAccountId = e.target.value;
    setDestinationAccount(selectedAccountId);
    const selectedAccount = accounts.find(
      (account) => account.acc_id === selectedAccountId
    );
    setdistinationname(selectedAccount ? selectedAccount.name : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sourceAccount === destinationAccount) {
      alert("Source and destination accounts cannot be the same.");
      return;
    } else if (amount < 1) {
      alert("Transfer amount must be greater than 0.");
      return;
    }

    setAccounts(
      ...accounts,
      {
        id: accounts.length + 1,
        acc_id: sourceAccount,
        name: sourcename,
        depo: amount,
        type: "WITHDRAW",
      },
      {
        id: accounts.length + 2,
        acc_id: destinationAccount,
        name: distinationname,
        depo: amount,
        type: "DEPOSIT",
      }
    );

    // Find source and destination account objects

    localStorage.setItem("depo", JSON.stringify(accounts));

    // Clear form fields

    // Display success message
    alert("Transfer successful!");
  };

  return (
    <form className={styles.transferForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="sourceAccount">Source Account:</label>
        <select
          id="sourceAccount"
          className={styles.select}
          value={sourceAccount}
          onChange={handleSourceAccountChange}
          required
        >
          <option value="">Select Source Account</option>
          {accounts.map((account) => (
            <option key={account.acc_id} value={account.acc_id}>
              {account.name} ({account.acc_id})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="destinationAccount">Destination Account:</label>
        <select
          id="destinationAccount"
          className={styles.select}
          value={destinationAccount}
          onChange={handleDestinationAccountChange}
          required
        >
          <option value="">Select Destination Account</option>
          {accounts.map((account) => (
            <option key={account.acc_id} value={account.acc_id}>
              {account.name} ({account.acc_id})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          className={styles.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button className={styles.button} type="submit">
        Transfer
      </button>
    </form>
  );
}
