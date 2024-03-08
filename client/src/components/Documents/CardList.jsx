import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllRequestDocuments } from "../../api/documents.api";

const CardList = () => {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    async function loadAllRequest() {
      const response = await getAllRequestDocuments(null,1,null);
      console.log(response.data)
      setAllRequests(response.data);
    }

    loadAllRequest();
  }, []);
  return (
    <div className="lg:grid grid-cols-2 gap-3 xl:grid-cols-3">
      {allRequests.map((request) => (
        <Card
          key={request.id}
          id={request.id}
          date_request={request.date_request}
          status={request.id_request_document_status}
        />
      ))}
    </div>
  );
};

export default CardList;
