import React from "react";
import Button from "../components/UI/Button";
import Form from "../components/Events/Form";

export const CreateEventForm = () => {
  const title = "Create Event"
  const subtitle = "Form to create events"
  const link = "/events"
  const form = <Form />

  return (
    <CreatePageForm link={link} title={title} subtitle={subtitle} form={form}/>
  );
};
