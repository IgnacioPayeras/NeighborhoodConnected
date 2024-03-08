import React, { useState } from "react";
import Button from "../UI/Button";
import { updateRequestDocument } from "../../api/documents.api";

const Card = (props) => {
  const [finalState, setFinalState] = useState(props.status);

  function formattedCurrentDate() {
    const datetime = new Date();
    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1;
    const day = datetime.getDate();
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  }

  const data = {id_admin: 1, id_user: 1, date_request: props.date_request};

  const handleFinalStatus = async (data, id_status) => {
    data.id_request_document_status = id_status;
    data.date_final_status = formattedCurrentDate();
    await updateRequestDocument(props.id, data);
    setFinalState(id_status);
  };

  function getRequestStatus(finalState) {
    switch (finalState) {
      case 2:
        return { className: "text-green", statusText: "Accepted" };
      case 3:
        return { className: "text-red", statusText: "Rejected" };
      default:
        return { className: null, statusText: null };
    }
  }

  const { className, statusText } = getRequestStatus(finalState);
  return (
    <div className="flex justify-between bg-white shadow-lg p-10 rounded my-2">
      <div>
        <h2>Request {props.id}</h2>
        <span>{props.date_request}</span>
        <span>{props.date_final_status}</span>
      </div>
      {finalState === 1 ? (
        <div>
          <Button
            className="mr-1"
            name="Accept"
            type="primary"
            color="green"
            onClick={() => handleFinalStatus(data, 2)}
          />
          <Button
            className="mr-1"
            name="Reject"
            type="primary"
            color="red"
            onClick={() => handleFinalStatus(data, 3)}
          />
        </div>
      ) : (
        <span className={`font-bold ${className}`}>Request {statusText}</span>
      )}
    </div>
  );
};

export default Card;
