import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login.api";
import { getUser } from "../api/users.api";
import Button from "../components/UI/Button";
import { useUser } from "../context/UserContext";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      const resultResponse = response.data;
      if (response.status === 200) {
        const userResponse = await getUser(response.data.id_user);
        const result = userResponse.data[0]
        result.id_account = resultResponse.id;
        result.id_account_role = resultResponse.id_account_role;
        console.log(result);
        updateUser(result);
        navigate("/events");
      } else {
        console.log("Username or password wrong!");
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h1 className="text-center mb-10">LOGIN</h1>
      <div className="bg-purple p-10 items-center mx-5 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col text-white my-2">
            <label htmlFor="username">Username *</label>
            <input
              id="username"
              name="username"
              type="text"
              className="text-black"
              placeholder="Enter a username"
              required
              {...register("username", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col mb-4 text-white">
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              name="password"
              type="password"
              className="text-black"
              placeholder="Enter a password"
              required
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <Button name="Login" type="secondary" color="transparent" />
        </form>
      </div>
    </div>
  );
};
