export function NewCustomer() {
  return (
    <>
      <h1> Create New Customer</h1>
      <form>
        <div>
          <input type="number" placeholder="Account Id" />
        </div>
        <div>
          <input type="text" placeholder="Account Name" />
        </div>
        <div>
          <input type="number" placeholder="Balance" />
        </div>
      </form>
    </>
  );
}
