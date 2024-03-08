import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import { deleteAnnouncement } from "../../api/announcements.api";

const Card = (props) => {
  const [deleted, setDeleted] = useState(false);
  const handleDeleteAnnouncement = async (id) => {
    await deleteAnnouncement(id);
    setDeleted(true);
  };
  return !deleted ? (
    <div className="bg-white shadow-lg p-10 rounded my-2">
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div>
        <Button className="mr-1" name="Edit" type="primary" color="purple" />
        <Button
          name="Delete"
          type="primary"
          color="red"
          onClick={() => handleDeleteAnnouncement(props.id)}
        />
      </div>
    </div>
  ) : null;
};

export default Card;
