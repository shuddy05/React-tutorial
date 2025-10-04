import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="py-5">
        <h1 className="text-center text-3xl">PAGE NOT FOUND</h1>
      <Link to="/">
        <button
          className=" bg-black text-white rounded-md p-4 mt-5  mx-auto block cursor-pointer"
          type="button"
        >
          Back to Home 
        </button>
      </Link>
    </div>
  );
};

export default Error404;
