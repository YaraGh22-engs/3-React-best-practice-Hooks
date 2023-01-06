import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [state, setstate] = useState(0);
  const [test, settest] = useState(0);
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const result = useMemo(() => {
    return (
      <div style={{ color: randomColor }}>
        value is {state} := {state * 2}
      </div>
    );
  }, [state]);
  return (
    <div>
    <h1>Hello from Memo</h1>
      {result}
      <button onClick={() => setstate(state - 1)}>-</button>
      <button onClick={() => setstate(state + 1)}>+</button>
      <button onClick={() => settest(test + 1)}>test</button>
    </div>
  );
};

export default UseMemoExample;
