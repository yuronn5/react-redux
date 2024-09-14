import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div>
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
      </div>
    </div>
  );
}

export default App;
