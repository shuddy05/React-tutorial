import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <PropagateLoader />
    </div>
  );
};

export default Loader;
