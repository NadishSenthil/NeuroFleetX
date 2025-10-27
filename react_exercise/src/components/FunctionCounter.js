import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h3>Function Counter (Hooks)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default FunctionCounter;