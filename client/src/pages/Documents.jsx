import React, { useState, useEffect } from "react";
import Button from "../components/UI/Button";
import CardList from "../components/Documents/CardList";
import { useUser } from "../context/UserContext";

import {
  createRequestDocument,
  getAllRequestDocuments,
} from "../api/documents.api";

export const Documents = () => {
  const [requestDocument, setRequestDocument] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    async function loadRequestDocument() {
      const response = await getAllRequestDocuments(user.id_account, 1, 1);
      console.log(response.data)
      setRequestDocument(response.data.length !== 0 ? true : false);
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
    id_user: user.id_account,
  };
  const handleRequestDocument = async (data) => {
    setRequestDocument(true);
    await createRequestDocument(data);
  };

  return (
    <div className="px-10 mt-10">
      <h1>Documents</h1>
      <h3>
        You can request the residence certificate. You can also view your
        request history.
      </h3>
      {requestDocument === false ? (
        <Button
          name="Request residence certificate"
          type="primary"
          color="purple"
          className="w-fit h-fit"
          onClick={() => handleRequestDocument(initialData)}
        />
      ) : null}
      {user.id_account_role === 1 ? (
        <div className="my-5">
          <h3>Requests</h3>
          <CardList section={1} />
        </div>
      ) : null}
      <div className="my-5">
        <h3>Your Historical Requests</h3>
        <CardList section={3} />
      </div>
    </div>
  );
};
