import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
// useParams - get acces to dynmic route
const ProductDetails = () => {
  const { productId } = useParams();
  const url = `https://dummyjson.com/products/${productId}`;
  const { isLoading, results } = useFetch(url);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <Link to="/profile" className="bg-black text-white p-2 rounded-lg">
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-3 items-center my-3 w-full">
        <img
          src={results.images[0]}
          alt="image"
          className="max-w-[500px] w-full"
        />
        <div>
          <h1 className="text-center">Product Description</h1>
          <h1 className="text-2xl">{results.title}</h1>
          <h1>Brand: {results.brand}</h1>
          <h2 className="text-xl">${results.price}</h2>
          <p>{results.description}</p>
          <div className="flex gap-2 border p-2 rounded-lg">
            <p>{results.availaibilityStatus}</p>
            <p>{results.warrantyInformation}</p>
            <p>{results.shippingInformation}</p>
          </div>
          <p>
            Rating:{" "}
            <span
              className={
                results.rating > 3.5 ? "text-green-500" : "text-red-500"
              }
            >
              {results.rating}
            </span>
          </p>
        </div>
      </div>
      <div className="shadow-xl rounded-xl p-4 max-w-[300px] mt-4 border border-gray-200">
        <h1 className="font-bold">CUSTOMER FEEDBACK</h1>
        <div className="flex  flex-col justify-between gap-5">
          {results.reviews.map((review, index) => {
            return (
              <div key={index}>
                <p className="">
                  Rating:{" "}
                  <span
                    className={
                      review.rating > 3.5 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {review.rating}
                  </span>
                </p>
                <p className="font-semibold"> {review.comment}</p>
                <p className="">By {review.reviewerName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
