import styles from "./new-customer.module.css";
import React, { useEffect, useState } from "react";

export function NewCustomer() {
  var customer_index = 0;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [depo, setDepo] = useState("");
  const [depoList, setDepoList] = useState([]);

  useEffect(() => {
    const storedDepoList = localStorage.getItem("depo");
    if (storedDepoList) {
      setDepoList(JSON.parse(storedDepoList));
    }
  }, []);

  const handle = (e) => {
    e.preventDefault();
    customer_index++;
    const newDepoList = [
      ...depoList,
      { id: customer_index, acc_id: id, name, depo, type: "DEPOSIT" },
    ];
    setDepoList(newDepoList);
    localStorage.setItem("depo", JSON.stringify(newDepoList));
  };

  const uniqueAccIds = [...new Set(depoList.map((item) => item.acc_id))];

  return (
    <div>
      <form onSubmit={handle}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={depo}
          onChange={(e) => setDepo(e.target.value)}
          placeholder="Deposit"
          required
        />
        <button type="submit">Add Deposit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Deposit</th>
          </tr>
        </thead>
        <tbody>
          {depoList.map((item, index) => (
            <tr key={index}>
              <td>{item.acc_id}</td>
              <td>{item.name}</td>
              <td>{item.depo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
