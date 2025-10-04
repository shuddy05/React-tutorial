import React, { use } from "react";

// JSX - html tags or componnets
// props children

const PropChild = ({ user = "Anonymous", age = 1, children }) => {
  return (
    <div>
      <h1>Child</h1>
      <h1>
        {user} {age}{" "}
      </h1>
      {children}
    </div>
  );
};

const PropsExample = () => {
  const user = "John";
  return (
    <div>
      <PropChild user={user} age={54} />
      <PropChild user="Ade" age={78} />
      <PropChild>
        <p>i am married</p>
      </PropChild>
      <PropChild>
        <button>Click me</button>
      </PropChild>
    </div>
  );
};

export default PropsExample;
