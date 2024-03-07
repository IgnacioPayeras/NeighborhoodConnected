import React from "react";
import Button from "../UI/Button";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createEvent } from "../../api/events.api";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.id_created_by = 1;
    await createEvent(data);
    navigate("/events")
  };

  return (
    <form
      className="bg-purple text-white rounded-lg p-8 w-2/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter a title"
          required
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="startdatetime">Start Datetime *</label>
        <input
          id="startdatetime"
          name="startdatetime"
          type="datetime-local"
          required
          {...register("start_datetime", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="enddatetime">End Datetime *</label>
        <input
          id="enddatetime"
          name="enddatetime"
          type="datetime-local"
          required
          {...register("end_datetime", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="location">Location *</label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter a location"
          required
          {...register("location", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Enter a description"
          {...register("description", {
            required: false,
          })}
        />
      </div>
      <Button name="Create" type="secondary" />
    </form>
  );
};

export default Form;
