import React from "react";
import { useState } from "react";
// Create object URL
const Otherinput = () => {
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    setPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[1]));
  };

  const handleRemove = () => {
    setPicture(null);
    setPreview(null);
  };
  return (
    <div>
      <form className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl py-3">
        <label htmlFor="pic">Provide a profile picture</label>
        <input
          type="file"
          className="border border-black p-2"
          accept="image/*"
          onChange={handleChange}
        />
        {preview && (
          <img
            src={preview}
            alt="seleted image"
            className="h-20 w-20 rounded-md border border-black mt-2"
          />
        )}
        {preview && (
          <button type="button" onClick={handleRemove}>
            X
          </button>
        )}
      </form>
    </div>
  );
};

export default Otherinput;
