import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Peter");
  const [num, setNum] = useState(0);

  const handleClick = () => {
    if (name === "Peter") {
      setName("John");
    } else {
      setName("Peter");
    }
  };

  const handleIncrease = () => {
    setNum(num + 1);
  };

  const handleDecrease = () => {
    setNum(num - 1);
  };
  const handleReset = () => {
    setNum(0);
  };
  return (
    <div>
      <h1 className="text-3xl">{name}</h1>
      <button onClick={handleClick}>Change Name</button>
      <h1 className="text-3xl">{num}</h1>
      <button onClick={handleIncrease}> Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SimpleState;
