import React, { useState } from "react";
import Button from "../UI/Button";
import { deleteReport } from "../../api/reports.api.js";
import { useUser } from "../../context/UserContext.jsx";

const Card = (props) => {
  const { user } = useUser();
  const [deleted, setDeleted] = useState(false);
  const handleDeleteReport = async (id) => {
    await deleteReport(id);
    setDeleted(true);
  };
  return !deleted ? (
    <div className="bg-white shadow-lg p-10 rounded my-2">
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      {props.account === user.id ? (
        <div>
          <Button className="mr-1" name="Edit" type="primary" color="purple" />
          <Button
            name="Delete"
            type="primary"
            color="red"
            onClick={() => handleDeleteReport(props.id)}
          />
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Card;
