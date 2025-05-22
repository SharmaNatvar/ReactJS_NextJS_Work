import React, { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  const countIncreaseFunction = () => {
    setCount(count + 1);
  };
  const countDecFunction = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="bg-gray-100 text-amber-700">
        <h4>Demo of Use State</h4>
        <p>{count}</p>
      </div>
      <button
        className="m-3 p-2 rounded-md bg-amber-200"
        onClick={countIncreaseFunction}
      >
        Inc
      </button>
      <button
        className="m-3 p-2 rounded-md bg-amber-200"
        onClick={countDecFunction}
      >
        dec
      </button>
    </>
  );
};

export default UseStateDemo;
