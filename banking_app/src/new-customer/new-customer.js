import styles from "./new-customer.module.css";

export function NewCustomer() {
  const onNewCustomer = (e) => {
    e.preventDefault();

    console.log(e.target);
    const acId = e.target.acId.value;
    const acName = e.target.acName.value;
    const balance = e.target.balance.value;

    console.log(`Id ${acId} Name ${acName} Balance ${balance}`);
  };

  return (
    <div className={styles.custCont}>
      <h1> Create New Customer</h1>
      <form onSubmit={onNewCustomer}>
        <input type="number" placeholder="Account Id" name="acId" />

        <input type="text" placeholder="Account Name" name="acName" />

        <input type="number" placeholder="Balance" name="balance" />

        <input type="submit" value="Create" />
      </form>
    </div>
  );
}
