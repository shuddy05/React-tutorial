import React from "react";
import axios from "axios";
// get request with axios
// destructure {data}
// error as axiosError
// config
const url = "https://dummyjson.com/products";
const AxiosExample = () => {
  const myaxios = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000,
  });
  const getProduct = async () => {
    try {
      const response = await axios("/products");
    } catch (error) {
      console.log(error);
    }
  };
  getProduct();
  const getSingleProduct = async () => {
    try {
      const response = await axios("/products/1");
    } catch (error) {4
      console.log(error);
    }
  };
  getSingleProduct();
  return <div></div>;
};

export default AxiosExample;
