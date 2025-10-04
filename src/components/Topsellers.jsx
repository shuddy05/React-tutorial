import React from "react";
import Singleproduct from "./Singleproduct";
import { customers, users, products } from "./data";

const Topsellers = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <diV className="bg-orange-400 flex items-center justify-between px-3">
        <h1 className="font-semibold text-2xl">
          Top Sellers | Brand Festival Deals
        </h1>
        <a href="">See all{">"}</a>
      </diV>
      <div className="flex items-center gap-3">
        {products.map((product) => {
          return <Singleproduct key={product.id} {...product} />;
        })}
      </div>
      <div>
        {customers.map((customer, index) => {
          return (
            <p className="text-blue-500" key={index}>
              {customer}
            </p>
          );
        })}
      </div>
      <div>
        <h1>List of Users</h1>
        {users.map((user) => {
          return (
            <div className="flex gap-2 " key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topsellers;
