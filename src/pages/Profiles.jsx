import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const url = "https://dummyjson.com/products";
import { useAppContext } from "../hooks/useAppContext";
const Profiles = () => {
  const { isLoading, isError, results } = useFetch(url);
  const { user } = useAppContext();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl">WELCOME BACK {user ? user : "Annonymous"}</h1>
      <h1 className="text-center text-2xl font-bold">List of Products</h1>
      <div className="grid md:grid-cols-3 gap-5 my-4 ">
        {results.products.map((product) => {
          return (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="max-w-[330px] border p-2 rounded-lg">
                <img src={product.thumbnail} alt="" />
                <p className="font-semibold">{product.title}</p>
                <p className="text-xl">${product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Profiles;
