import React, { useState, useEffect } from "react";
import Button from "../components/UI/Button";
import CardList from "../components/Documents/CardList";

import { createRequestDocument, getAllRequestDocuments } from "../api/documents.api";

export const Documents = () => {
  const [requestDocument, setRequestDocument] = useState([]);
  

  useEffect(() => {
    async function loadRequestDocument() {
      const response = await getAllRequestDocuments(1, 1, 1);
      setRequestDocument(response.data);
    }

    loadRequestDocument();
  }, []);

  function formattedCurrentDate() {
    const datetime = new Date();
    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1;
    const day = datetime.getDate();
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  }

  const initialData = {
    date_request: formattedCurrentDate(),
    id_request_document_status: 1,
    id_user: 1,
  };
  const handleRequestDocument = async (data) => {
    await createRequestDocument(data);
  };

  return (
    <div className="px-10 mt-10">
      <h1>Documents</h1>
      <h3>
        You can request the residence certificate. You can also view your
        request history.
      </h3>
      {!requestDocument ? (
        <Button
          name="Request residence certificate"
          type="primary"
          color="purple"
          className="w-fit h-fit"
          onClick={() => handleRequestDocument(initialData)}
        />
      ) : null}
      <h3>Requests</h3>
      <CardList section={1}/>
      <h3>Actual Request</h3>
      <CardList section={2}/>
      <h3>Your Historical Requests</h3>
      <CardList section={3}/>
    </div>
  );
};
