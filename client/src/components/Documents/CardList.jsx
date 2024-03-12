import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllRequestDocuments } from "../../api/documents.api";
import { useUser } from "../../context/UserContext";

const CardList = (props) => {
  const { user } = useUser();
  const [allRequests, setAllRequests] = useState([]);
  const [ownRequests, setOwnRequests] = useState([]);
  const [latestRequest, setLatestRequest] = useState([]);
  const section = props.section;

  useEffect(() => {
    async function loadAllRequest() {
      const response = await getAllRequestDocuments(null, 1, null);
      const response2 = await getAllRequestDocuments(user.id_account, 1, 1);
      user.id_account_role === 1 ? setAllRequests(response.data) : null;
      setLatestRequest(response2.data[0]);
    }

    async function loadOwnRequests() {
      const response = await getAllRequestDocuments(1, null, null);
      const responseData = response.data.filter(data => data.id_request_document_status !== 1);
      setOwnRequests(responseData);
    }

    loadAllRequest();
    loadOwnRequests();
  }, []);

  return (
    <div className="lg:grid grid-cols-2 gap-3 xl:grid-cols-3">
      {section === 1 ? (allRequests.length !== 0 ? (
        allRequests.map((request) => (
          <Card
            key={request.id}
            id={request.id}
            date_request={request.date_request}
            status={request.id_request_document_status}
          />
        ))
      ) : <span className="text-red font-bold italic">No requests</span>) : section === 3 ? (ownRequests ? ownRequests.map((request) => (
        <Card
          key={request.id}
          id={request.id}
          date_request={request.date_request}
          status={request.id_request_document_status}
        />
      )) : <span className="text-red font-bold italic">No requests</span>) : (latestRequest ? (
        <Card
          key={latestRequest.id}
          id={latestRequest.id}
          date_request={latestRequest.date_request}
          status={latestRequest.id_request_document_status}
        />
      ) : <span className="text-red font-bold italic">No requests</span>)}
    </div>
  );
};

export default CardList;
