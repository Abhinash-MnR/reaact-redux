import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./reducer/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  // name property as 'counter.'
  // initialState with a 'value' property
  // useSelector to return the state.counter.value
  const dispatch = useDispatch();

  // dispatch function to dispatch our actions
  return (
    <div>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}

export default App;
