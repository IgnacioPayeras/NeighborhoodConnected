import React from "react";
import Button from "../UI/Button";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createAnnouncement } from "../../api/announcements.api";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.pub_datetime = new Date();
    data.id_account = 1;
    await createAnnouncement(data);
    navigate("/announcements");
  };
  return (
    <form
      className="bg-purple text-white rounded-lg p-8 w-full md:w-3/4"
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
        <label htmlFor="content">Description *</label>
        <input
          id="content"
          name="content"
          type="text"
          placeholder="Enter a description"
          {...register("content", {
            required: false,
          })}
        />
      </div>
      <Button name="Create" type="secondary" />
    </form>
  );
};

export default Form;
