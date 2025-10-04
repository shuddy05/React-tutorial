import React from "react";

const Navbar = ({ length }) => {
  return (
    <div className="flex justify-between">
      <h1 id="toTop" style={{ color: "white", fontSize: "14px" }}>
        Navbar
      </h1>

      <p>cart {length}</p>
    </div>
  );
};

export default Navbar;
