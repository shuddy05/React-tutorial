import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//
const userSchema = yup.object().shape({
  fullname: yup.string().required("Full Name is required"),
  username: yup
    .string()
    .required("username is required")
    .min(5, "username must be at least 5 characters"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
});
const ThirdpartyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  }); ///// 2

  const handleAddUser = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddUser)}
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl py-3"
      >
        <h1 className="text-xl font-bold mb-3">Enter Details</h1>
        <input
          type="text"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Full name"
          name="fullname"
          {...register("fullname")}
        />
        <p className="text-sm text-red-500">{errors.fullname?.message}</p>
        <input
          type="text"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Username"
          name="username"
          {...register("username")}
        />
        <p className="text-sm text-red-500">{errors.username?.message}</p>

        <input
          type="email"
          className="w-full block p-2 mb-2 rounded-md border"
          placeholder="Email Address"
          name="email"
          {...register("email")}
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>

        <button className="cursor-pointer w-full bg-blue-500 text-white rounded-md p-2 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThirdpartyForm;
