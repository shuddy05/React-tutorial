import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
const url = "https://example-data.draftbit.com/authors?_limit=10";

const Authors = () => {
  const { isLoading, isError, results: authors } = useFetch(url);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div>
        <h1>Error Occured</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>List of Authors</h1>
      <div className="flex  justify-between items-center flex-wrap">
        {authors &&
          authors.map((author) => {
            const { id, imgUrl, person, professions } = author;
            return (
              <div
                key={id}
                className="max-w-[300px] border border-blue-600 rounded-xl p-3 shadow-xl"
              >
                <img
                  src={imgUrl}
                  alt=""
                  className="w-full max-h-[200px] object-cover"
                />
                <h1 className="font-bold text-blue-800">{person}</h1>
                <p className="font-semibold text-red-800">{professions}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Authors;
