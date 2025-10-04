import React from "react";
const url = "https://example-data.draftbit.com/books?_limit=10";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
const Books = () => {
  const { isError, isLoading, results: books } = useFetch(url);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error Occured</h1>;
  }
  return (
    <div>
      <h1>FAVORITE BOOKS TO READ</h1>
      <div className="grid md:grid-cols-3 items-center gap-3">
        {books &&
          books.map((book) => {
            const { id, title, authors, image_url } = book;
            return (
              <div key={id}>
                <img src={image_url} alt="" />
                <h1>{title}</h1>
                <p> written by:{authors}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Books;
