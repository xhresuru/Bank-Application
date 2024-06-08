import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.dashCont}>
      <div onClick={() => navigate("/new")}>New Customer</div>
      <div>Deposit</div>
      <div>Withdraw</div>
      <div>Transfer</div>
      <div>Balance</div>
    </div>
  );
}
