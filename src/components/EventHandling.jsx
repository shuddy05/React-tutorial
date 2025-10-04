import React from "react";

const EventHandling = () => {
  const handleClick = () => {
    alert("Welcom User");
  };
  const handleWelcomUser = (name) => {
    alert(`Welcome ${name}`);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl">EventHandling</h1>
      <button
        onClick={() => alert("Welcom User")}
        className="cursor-pointer border rounded-lg w-[200px] mx-auto py-3"
      >
        {" "}
        Welcome
      </button>
      <button
        onClick={handleClick}
        className="cursor-pointer border rounded-lg w-[200px] mx-auto py-3"
      >
        {" "}
        Welcome
      </button>
      <button
        onClick={() => handleWelcomUser("Wale")}
        className="cursor-pointer border rounded-lg w-[200px] mx-auto py-3"
      >
        {" "}
        Welcome Again
      </button>
    </div>
  );
};

export default EventHandling;
