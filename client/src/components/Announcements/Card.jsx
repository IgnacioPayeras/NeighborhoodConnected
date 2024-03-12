import React, { useState } from "react";
import Button from "../UI/Button";
import { deleteAnnouncement } from "../../api/announcements.api";
import { useUser } from "../../context/UserContext";

const Card = (props) => {
  const { user } = useUser();
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
      {props.account === user.id_account ? (
        <div>
          <Button
            name="Delete"
            type="primary"
            color="red"
            onClick={() => handleDeleteAnnouncement(props.id)}
          />
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Card;
