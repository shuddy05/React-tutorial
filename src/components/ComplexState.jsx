import React from "react";
import { useState } from "react";


// useState on Objects
const ComplexState = () => {
  const [customer, setCustomer] = useState({
    name: "Mr john",
    address: "Lagos",
    email: "abdcc@gmail.com",
  });

  const handleChange = () => {
    setCustomer({ ...customer, address: "London", name: "John Doe" });
  };
  return (
    <div>
      <h1 className="text-2xl">{customer.name}</h1>
      <h1>Address: {customer.address}</h1>
      <button onClick={handleChange} className="bg-blue-500 rounded-md p-2">
        Change User
      </button>
    </div>
  );
};

export default ComplexState;
