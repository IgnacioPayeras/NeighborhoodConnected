import React, { useState } from "react";
import { useUser } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { login } from "../api/login.api";
import { getUser } from "../api/users.api";

import Button from "../components/UI/Button";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      if (response.status === 200) {
        const userResponse = await getUser(response.data.id_user);
        setUser({
          id: 1,
          username: 1,
          email: 1,
          role: 1,
        });
        navigate("/events");
      } else {
        console.log("Username or paswword wrong!");
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
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
        <div className="flex flex-col mb-4">
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
        <Button name="Login" type="primary" color="purple" />
      </form>
    </div>
  );
};
