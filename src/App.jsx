import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = { id: Date.now(), name };

    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };
  const deleteCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id });
  };

  return (
    <div>
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button>Delete Customer</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer, index) => (
            <div onClick={() => deleteCustomer(customer)} key={customer + index}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>We dont have any clients</div>
      )}
    </div>
  );
}

export default App;
