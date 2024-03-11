import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { login } from "../api/login.api";

import Button from "../components/UI/Button";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
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
