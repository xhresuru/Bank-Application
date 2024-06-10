import styles from "./dashboard.module.css"; // Importing CSS module for styling
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

export function Dashboard() {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className={styles.dashCont}>
      {" "}
      {/* Container for dashboard */}
      {/* Navigation links for various functionalities */}
      <div onClick={() => navigate("/new")}>New Customer</div>{" "}
      {/* Link to navigate to the new customer page */}
      <div onClick={() => navigate("/deposit")}>Deposit</div>{" "}
      {/* Link to navigate to the deposit page */}
      <div onClick={() => navigate("/withdraw")}>Withdraw</div>{" "}
      {/* Link to navigate to the withdraw page */}
      <div onClick={() => navigate("/balance")}>Balance</div>{" "}
      {/* Link to navigate to the balance page */}
    </div>
  );
}
