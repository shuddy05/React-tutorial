import React, { useState } from "react";

const ComplexForm = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [error, setError] = useState("");
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    /// check inputs
    if (!user.fullname.trim() || !user.username.trim() || !user.email.trim()) {
      // set Error
      setError("Please fill all fields");
      return;
    }
    // After actions
    setUser({
      fullname: "",
      username: "",
      email: "",
    });
    setError("");
  };
  /// handle change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl py-3"
      >
        <h1 className="text-xl font-bold mb-3">Enter Details</h1>
        <p className="text-sm text-red-500">{error}</p>
        <input
          type="text"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Full name"
          name="fullname"
          value={user.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="email"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button className="cursor-pointer w-full bg-blue-500 text-white rounded-md p-2 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplexForm;
