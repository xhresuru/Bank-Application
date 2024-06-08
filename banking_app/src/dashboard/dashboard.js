import styles from "./dashboard.module.css";

export function Dashboard() {
  return (
    <div className={styles.dashCont}>
      <div>New Customer</div>
      <div>Deposit</div>
      <div>Withdraw</div>
      <div>Transfer</div>
      <div>Balance</div>
    </div>
  );
}
