import React from "react";
import Button from "./UI/Button";

const CreatePageForm = (props) => {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row">
        <Button
          className="mb-2 md:mr-2"
          name="← Back"
          type="primary"
          color="purple"
          link={props.link}
        />
        <h1>{props.title}</h1>
      </div>
      <h3>{props.subtitle}</h3>
      <div className="flex justify-center mt-2">
        {props.form}
      </div>
    </div>
  );
};

export default CreatePageForm;
