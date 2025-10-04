import React from "react";

const Singleproduct = ({ image, title, newPrice, oldPrice, discountPrice }) => {
  return (
    <div className="relative">
      <img src={image} alt={title} />
      <h2 className="text-xl">{title}</h2>
      <p className="text-lg font-semibold">{newPrice}</p>
      <p className="text-sm line-through">{oldPrice}</p>
      <p className="absolute top-2 right-2 bg-orange-100 text-orange-400 p-2">
        -{discountPrice}% {""}
      </p>
    </div>
  );
};

export default Singleproduct;
