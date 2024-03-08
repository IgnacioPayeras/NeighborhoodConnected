import React from "react";
import Button from "../UI/Button";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createReport } from "../../api/reports.api";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.report_datetime = new Date();
    data.id_report_status = 3;
    data.id_account = 1;
    await createReport(data);
    navigate("/reports");
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
          className="text-black"
          placeholder="Enter a title"
          required
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="description">Description *</label>
        <input
          id="description"
          name="description"
          className="text-black"
          type="text"
          placeholder="Enter a description"
          {...register("description", {
            required: true,
          })}
        />
      </div>
      <Button name="Create" type="secondary" />
    </form>
  );
};

export default Form;
