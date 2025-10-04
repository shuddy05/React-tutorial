import React from "react";
import { useEffect, useState } from "react";
const SimpleEffects = () => {
  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log("useeffect ran");
  }, [num]);
  return (
    <div>
      <h1 className="text-3xl">{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase num</button>
    </div>
  );
};

export default SimpleEffects;
