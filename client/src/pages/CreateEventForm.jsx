import React from "react";
import Button from "../components/UI/Button";
import Form from "../components/Events/Form";

export const CreateEventForm = () => {
  return (
    <div>
      <div>
        <Button name="Back"/>
        <h1>Create Event</h1>
        <h3>Form to create events</h3>

      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

