import React from "react";
import Button from "../components/UI/Button";
import Form from "../components/Events/Form";

export const CreateEventForm = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row">
        <Button className="mb-2 md:mr-2" name="← Back" type="primary" color="purple" link="/events"/>
        <h1>Create Event</h1>
      </div>
      <h3>Form to create events</h3>
      <div className="flex justify-center mt-2">
        <Form />
      </div>
    </div>
  );
};
