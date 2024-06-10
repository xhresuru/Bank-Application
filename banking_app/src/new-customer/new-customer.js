import styles from "./new-customer.module.css"; // Importing CSS module for styling
import React, { useEffect, useState } from "react"; // Importing necessary hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

export function NewCustomer() {
  // State variables for account ID, name, deposit amount, list of deposits, and success message
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [depo, setDepo] = useState("");
  const [depoList, setDepoList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // useEffect hook to load stored deposit list from local storage on component mount
  useEffect(() => {
    const storedDepoList = localStorage.getItem("depo");
    if (storedDepoList) {
      setDepoList(JSON.parse(storedDepoList));
    }
  }, []);

  // Handle form submission to add a new deposit
  const handle = (e) => {
    e.preventDefault();
    var count = depoList ? depoList?.length + 1 : 1;
    const newDepoList = [
      ...depoList,
      { id: count, acc_id: id, name, depo, type: "DEPOSIT" },
    ];
    setDepoList(newDepoList);
    localStorage.setItem("depo", JSON.stringify(newDepoList));
    setSuccessMessage("Deposit added successfully!");

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  // Get unique account IDs from the deposit list
  const uniqueAccIds = [...new Set(depoList.map((item) => item.acc_id))];
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <>
      {/* Back button to navigate to the previous page */}
      <button className={styles.button} onClick={() => navigate("/")}>
        Back
      </button>
      <div className={styles.custCont}>
        {/* Form to add a new deposit */}
        <form onSubmit={handle}>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Account ID"
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
        {/* Display success message if available */}
        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}
      </div>
    </>
  );
}
