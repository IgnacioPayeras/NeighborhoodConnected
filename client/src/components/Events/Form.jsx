import React from "react";
import Button from "../UI/Button";

import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Title *</label>
        <input
          type="text"
          placeholder="Enter a title"
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="">Datetime *</label>
        <input
          type="datetime-local"
          {...register("datetime", {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="">Location *</label>
        <input
          type="text"
          placeholder="Enter a location"
          {...register("location", {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Enter a description"
          {...register("description", {
            required: false,
          })}
        />
      </div>
      <Button name="Create" />
    </form>
  );
};

export default Form;
