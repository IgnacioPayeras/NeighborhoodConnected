import React from "react";
import CreatePageForm from "../components/CreatePageForm";
import Form from "../components/Announcements/Form";

export const CreateAnnouncementForm = () => {
  const title = "Create Announcement"
  const subtitle = "Form to create announcements"
  const link = "/announcements"
  const form = <Form />

  return (
    <CreatePageForm link={link} title={title} subtitle={subtitle} form={form}/>
  );
};
