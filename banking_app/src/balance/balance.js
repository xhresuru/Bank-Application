import styles from "./balance.module.css";
import React, { useEffect, useState } from "react";

export function Balance() {
  const [id, setId] = useState("");
  const [depoList, setDepoList] = useState([]);
  const [depo, setDepo] = useState("");
  const [names, setName] = useState("");
  const [acc_id, setACC_id] = useState("");

  useEffect(() => {
    const storedDepoList = localStorage.getItem("depo");
    if (storedDepoList) {
      console.log(storedDepoList);
      setDepoList(JSON.parse(storedDepoList));
    }
  }, []);

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
  const uniqueData = Array.from(
    new Set(depoList.map((item) => item.acc_id))
  ).map((acc_id) => depoList.find((obj) => obj.acc_id === acc_id));

  const handleAccountChange = (event) => {
    const selectedId = event.target.value;
    setId(selectedId);

    const account = depoList.find((account) => account.acc_id === selectedId);
    setName(account?.name);
    setACC_id(account?.acc_id);
    console.log(account?.name);
  };

  const userDeposits = acc_id
    ? depoList.filter((item) => item.acc_id === acc_id)
    : [];
  const totalDepositSum = userDeposits.reduce((total, item) => {
    return item.type === "DEPOSIT"
      ? total + parseInt(item.depo)
      : total - parseInt(item.depo);
  }, 0);

  return (
    <div className={styles.balCont}>
      <h1>Balance</h1>
      <form onSubmit={handle}>
        <select value={id} onChange={handleAccountChange} required>
          <option value="">Select Account</option>
          {uniqueData.map((account) => (
            <option key={account.id} value={account.acc_id}>
              {account.name}
            </option>
          ))}
        </select>
      </form>

      <h2>Balance</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Acc id</th>
            <th>Name</th>
            <th>Deposit </th>
          </tr>
        </thead>
        <tbody>
          {userDeposits.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.acc_id}</td>
              <td>{item.name}</td>
              <td>{item.depo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Total balance of user {names} is RS {totalDepositSum}
      </div>
    </div>
  );
}
