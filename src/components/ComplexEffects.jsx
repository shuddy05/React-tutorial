import React from "react";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
const url = "https://dummyjson.com/products";

const ComplexEffects = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Get products
  const getProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[500px]  flex justify-center items-center">
        <FadeLoader />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl text-center my-4">Our Products</h1>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {products.map((product) => {
          const { id, thumbnail, title, price } = product;
          return (
            <div
              key={id}
              className="shadow-xl rounded-md border border-black p-2 w-[330px] h-[400px]
                "
            >
              <img src={thumbnail} alt={title} className="w-full h-[80%]" />
              <h1 className="text-lg">{title}</h1>
              <p className="text-lg ">${price} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexEffects;
