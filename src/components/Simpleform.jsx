import React from "react";
import { useState } from "react";
const Simpleform = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const [comment, setComment] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //   // Check Input fields
    if (!username.trim() || !email.trim() || !comment.trim() || !agree) {
      setError("please fill the inputs");
      return;
    }

    //
    setEmail("");
    setUsername("");
    setError("");
    setComment("");
    setAgree(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl py-3"
      >
        <h1 className="text-xl font-bold mb-2.5">Provide Information</h1>
        <p className="text-red-500 text-sm">{error}</p>
        <input
          type="text"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          className="w-full p-2 mb-2 block rounded-md border"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree">Sign up for newsletters</label>
        <button className="cursor-pointer w-full bg-blue-500 text-white rounded-md p-2 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Simpleform;
