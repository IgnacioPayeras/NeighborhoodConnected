from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class RequestDocumentView(viewsets.ModelViewSet):
  serializer_class = RequestDocumentSerializer

  def get_queryset(self):
    id_user = self.request.query_params.get('id_user')
    id_request_document_status = self.request.query_params.get('id_request_document_status')
    limit = self.request.query_params.get('limit')

    queryset = Request_document.objects.all()
    queryset = queryset.order_by("-id")
    if id_user:
        queryset = queryset.filter(id_user=id_user)

    if id_request_document_status:
        queryset = queryset.filter(id_request_document_status=id_request_document_status)
    
    if limit:
        queryset = queryset[:int(limit)]

    
    return queryset

  

class RequestDocumentStatusView(viewsets.ModelViewSet):
  serializer_class = RequestDocumentStatusSerializer
  queryset = Request_document_status.objects.all()
