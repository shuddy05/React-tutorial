import React from "react";
import { useRef, useEffect } from "react";
// can be use to target DOM nodes/element
// Pass in a ref attribute
// {current:}
// Uncontrolled input
const SimpleRef = () => {
  const inputRef = useRef(null);
  const SearchRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(SearchRef.current.value);
  };
  return (
    <div>
      <p className="text-center">Sign up for our Newsletter</p>
      <form className="max-w-[550px] mx-auto my-3 rounded-xl shadow-xl p-3 flex gap-1.5 items-center">
        <input
          type="email"
          className="w-full block p-2  rounded-md border"
          placeholder="Email address"
          ref={inputRef}
        />
        <button className="p-2 bg-black text-white rounded-md cursor-pointer">
          Submit
        </button>
      </form>
      <form
        onSubmit={handleSearch}
        className="max-w-[550px] mx-auto my-3 rounded-xl shadow-xl p-3 flex gap-1.5 items-center"
      >
        <input
          type="text"
          className="w-full block p-2  rounded-md border"
          placeholder="Search for product"
          ref={SearchRef}
        />
        <button className="p-2 bg-black text-white rounded-md cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleRef;
