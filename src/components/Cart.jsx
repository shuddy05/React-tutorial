import React from "react";
import { useState } from "react";
/// useState on Array
// []- [filling up] -> [remove element]
const products = [
  { id: 1, title: "Jean", price: 25 },
  { id: 2, title: "Socks", price: 10 },
  { id: 3, title: "Hat", price: 15 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveItem = (id) => {
    const remaining = cartItems.filter((item) => item.id !== id);
    setCartItems(remaining);
  };
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-3 my-3 rounded-md shadow-md ">
        <h1 className="text-center text-xl mb-3">Your Cart is empty</h1>
        <button
          onClick={() => setCartItems(products)}
          className="bg-blue-500 text-white p-3 rounded-md mx-auto block"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-3 my-3 rounded-md shadow-xl ">
      {/* <Navbar length={cartItems.length}/> */}
      <div className="mb-2">
        <h1 className="text-2xl">Your Cart</h1>
      </div>
      <div className="flex gap-3 flex-col items-center">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center w-full"
            >
              <div className="flex gap-2 ">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 cursor-pointer"
                >
                  X
                </button>
                <h1>{item.title}</h1>
              </div>
              <p>${item.price}</p>
            </div>
          );
        })}
        <div className="flex justify-between items-center w-full border border-gray-500">
          <h1>Total price</h1>

          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
