import "./SignupForm.css";
import React from "react";
import UserSVG from "../SVG/UserSVG";
import LockSVG from "../SVG/LockSVG";
import EmailSVG from "../SVG/EmailSVG";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-react-form">
      <div className="form-input">
        <UserSVG />
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          placeholder="Enter Full Name"
          {...register("fullname", { required: "Full name is required" })}
        />
        {errors.fullname && (
          <p className="text-red">{errors.fullname.message}</p>
        )}
      </div>
      <div className="form-input">
        <EmailSVG />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.email && <p className="text-red">{errors.email.message}</p>}
      </div>
      <div className="form-input">
        <LockSVG />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Your Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red">{errors.password.message}</p>
        )}
      </div>
      <button type="submit">Sign-Up</button>
    </form>
  );
};

export default SignupForm;
