import React from "react";
import Button from "../components/UI/Button";
import Form from "../components/Events/Form";

export const CreateEventForm = () => {
  return (
    <div className="px-10 mt-10">
      <div className="flex">
        <Button className="mr-5" name="← Back" type="primary" color="purple" link="/events"/>
        <h1>Create Event</h1>
      </div>
      <h3>Form to create events</h3>
      <div className="flex justify-center">
        <Form />
      </div>
    </div>
  );
};
