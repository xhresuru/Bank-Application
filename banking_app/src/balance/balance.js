import styles from "./balance.module.css";

export function Balance() {
  return (
    <div className={styles.balCont}>
      <h1>Create New Customer</h1>
      {localStorage.getItem("Name") && (
        <div>
          Name: <p>{localStorage.getItem("Name")}</p>
        </div>
      )}
      {localStorage.getItem("ID") && (
        <div>
          Account ID <p>{localStorage.getItem("ID")}</p>
        </div>
      )}
    </div>
  );
}
