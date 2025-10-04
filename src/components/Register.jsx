import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { GoEyeClosed } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

const registerSchema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Confirm Password is required"),
});
const Register = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const handleRegister = (data) => {};
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="max-w-[450px] mx-auto my-3 rounded-xl shadow-xl py-3"
      >
        <input
          type="text"
          placeholder="First name"
          className="w-full p-2 mb-2 block rounded-md border"
          {...register("firstname")}
        />
        <small className="text-red-500">{errors.firstname?.message}</small>
        <input
          type="text"
          placeholder="Last name"
          className="w-full p-2 mb-2 block rounded-md border"
          {...register("lastname")}
        />
        <small className="text-red-500">{errors.lastname?.message}</small>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 mb-2 block rounded-md border"
          {...register("email")}
        />
        <small className="text-red-500">{errors.email?.message}</small>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="password"
            className="w-full p-2 mb-2 block rounded-md border"
            {...register("password")}
          />
          <button
            onClick={() => setShow(!show)}
            className="absolute top-3 right-5
          "
            type="button"
          >
            {show ? <GoEyeClosed /> : <FaRegEye />}
          </button> 
        </div>

        <small className="text-red-500">{errors.password?.message}</small>

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-2 mb-2 block rounded-md border"
          {...register("confirmPassword")}
        />
        <small className="text-red-500">
          {errors.confirmPassword?.message}
        </small>

        <button
          type="submit"
          className="cursor-pointer w-full bg-blue-500 text-white rounded-md p-2 mt-3"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
