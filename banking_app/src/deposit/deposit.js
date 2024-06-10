import styles from "./deposit.module.css"; // Importing CSS module for styling
import React, { useEffect, useState } from "react"; // Importing necessary hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

export function Deposit() {
  // State variables for account ID, list of deposits, deposit amount, account name, and selected account ID
  const [id, setId] = useState("");
  const [depoList, setDepoList] = useState([]);
  const [depo, setDepo] = useState("");
  const [names, setName] = useState("");
  const [acc_id, setACC_id] = useState("");

  // useEffect hook to load stored deposit list from local storage on component mount
  useEffect(() => {
    const storedDepoList = localStorage.getItem("depo");
    if (storedDepoList) {
      console.log(storedDepoList);
      setDepoList(JSON.parse(storedDepoList));
    }
  }, []);

  // Handle form submission to add a new deposit
  const handle = (e) => {
    e.preventDefault();
    var count = depoList.length + 1;
    const newDepoList = [
      ...depoList,
      { id: count, acc_id: id, name: names, depo: depo, type: "DEPOSIT" },
    ];
    setDepoList(newDepoList);
    localStorage.setItem("depo", JSON.stringify(newDepoList));
  };

  // Get unique account IDs from the deposit list and map them to their respective accounts
  const uniqueData = Array.from(
    new Set(depoList.map((item) => item.acc_id))
  ).map((acc_id) => depoList.find((obj) => obj.acc_id === acc_id));

  // Handle account selection change to update state with selected account details
  const handleAccountChange = (event) => {
    const selectedId = event.target.value;
    setId(selectedId);

    const account = depoList.find((account) => account.acc_id === selectedId);
    setName(account?.name);
    setACC_id(account?.acc_id);
    console.log(account?.name);
  };

  // Filter deposits for the selected account
  const userDeposits = acc_id
    ? depoList.filter((item) => item.acc_id === acc_id)
    : [];

  // Calculate the total deposit sum for the selected account
  const totalDepositSum = userDeposits.reduce((total, item) => {
    return item.type === "DEPOSIT"
      ? total + parseInt(item.depo)
      : total - parseInt(item.depo);
  }, 0);

  const navigate = useNavigate(); // Initialize navigation function

  return (
    <>
      {/* Back button to navigate to the previous page */}
      <button className={styles.button} onClick={() => navigate("/")}>
        Back
      </button>
      <div className={styles.depCont}>
        <h1>Deposit Amount</h1>
        {/* Form to add a new deposit */}
        <form onSubmit={handle}>
          <select value={id} onChange={handleAccountChange} required>
            <option value="">Select Account</option>
            {uniqueData.map((account) => (
              <option key={account.id} value={account.acc_id}>
                {account.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={depo}
            onChange={(e) => setDepo(e.target.value)}
            placeholder="Deposit"
            required
          />

          <div>
            <button type="submit">Deposit</button>
          </div>
        </form>

        <h2>Deposits</h2>
        {/* Table to display deposits for the selected account */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Acc ID</th>
              <th>Name</th>
              <th>Deposit </th>
              <th>Type </th>
            </tr>
          </thead>
          <tbody>
            {userDeposits.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.acc_id}</td>
                <td>{item.name}</td>
                <td>{item.depo}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Display total deposit sum for the selected user */}
        <div>
          Total deposit of user {names} is RS {totalDepositSum}
        </div>
      </div>
    </>
  );
}
