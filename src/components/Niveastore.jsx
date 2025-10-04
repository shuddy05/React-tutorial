import React from "react";
import { niveaProducts } from "./data";
import Singleproduct from "./Singleproduct";

const Niveastore = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="bg-orange-400 flex items-center justify-between px-3">
        <h1 className="font-semibold text-2xl">
          Nivea Official Store | Brand Festival Deals
        </h1>
        <a href="">See all {">"}</a>
      </div>
      <div className="flex gap-3 justify-between items-center">
        {niveaProducts.map((product) => {
          return <Singleproduct key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Niveastore;
