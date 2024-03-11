import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllRequestDocuments } from "../../api/documents.api";

const CardList = (props) => {
  const [allRequests, setAllRequests] = useState([]);
  const [ownRequests, setOwnRequests] = useState([]);
  const [latestRequest, setLatestRequest] = useState([]);
  const section = props.section;
  
  useEffect(() => {
    async function loadAllRequest() {
      const response = await getAllRequestDocuments(null,1,null);
      setAllRequests(response.data);
      setLatestRequest(response.data[0]);
    }

    async function loadOwnRequests() {
      const response = await getAllRequestDocuments(1,null,null);
      setOwnRequests(response.data);
    }

    loadAllRequest();
    loadOwnRequests();
  }, []);

  return (
    <div className="lg:grid grid-cols-2 gap-3 xl:grid-cols-3">
      {section === 1 ? allRequests.map((request) => (
        <Card
          key={request.id}
          id={request.id}
          date_request={request.date_request}
          status={request.id_request_document_status}
        />
      )) : (section === 3 ? ownRequests.map((request) => (
        <Card
          key={request.id}
          id={request.id}
          date_request={request.date_request}
          status={request.id_request_document_status}
        />)) : <Card
        key={latestRequest.id}
        id={latestRequest.id}
        date_request={latestRequest.date_request}
        status={latestRequest.id_request_document_status}
      />)}
    </div>
  );
};

export default CardList;
