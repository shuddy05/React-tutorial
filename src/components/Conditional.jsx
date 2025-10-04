import React from "react";

const Conditional = () => {
  const cart = ["BAG"];
  const isLoggedIn = true;
  const isError = false;
  const ratings = 3.5;

  if (cart.length === 0) {
    return <h1>CART IS EMPTY</h1>;
  }

  return (
    <div>
      <h1>PRODUCT IN THE CART</h1>

      {isLoggedIn ? <button>Log out</button> : <button>Log in</button>}
      {isError && <p>Something went wrong</p>}
      <p className={ratings >= 5 ? "text-green-500" : "text-red-500"}>
        Rating {ratings}
      </p>
    </div> 
  );
};

export default Conditional;
