import React, { useReducer } from "react";

//1-creat initialState
const initialState = {
  count: 0,
};
//2-creat reducer
// ps : we have to build reducer in another file
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { count: state.count + 1 };
    case "decrament":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return { state };
  }
};

const UseReduceExample = () => {
  //   const [state, setstate] = useState(0);

  //3-creat {useReducer} to combine {reducer}  with {initialState}
  const [state, dispatch] = useReducer(reducer, initialState);

  //4- use {dispatch} which is the action  in events
  return (
    <div>
      <h1>Hello from Reduce</h1>

      <h3>value is :{state.count}</h3>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
      <button onClick={() => dispatch({ type: "decrament" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReduceExample;
