import axios from "axios";

const requestDocumentsApi = axios.create({
  baseURL: "http://localhost:8000/documents/api/request_documents",
});

export const getAllRequestDocuments = (
  id_user = null,
  id_request_document_status = null,
  limit = null
) => {
  let url = "/";

  let params = [];
  if (id_user) {
    params.push(`id_user=${id_user}`);
  }

  if (id_request_document_status) {
    params.push(`id_request_document_status=${id_request_document_status}`);
  }

  if (limit) {
    params.push(`limit=${limit}`);
  }

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  return requestDocumentsApi.get(url);
};

export const createRequestDocument = (request) =>
  requestDocumentsApi.post("/", request);

export const updateRequestDocument = (id, request) =>
  requestDocumentsApi.put(`/${id}/`, request);
