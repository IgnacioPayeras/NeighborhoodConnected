from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class RequestDocumentView(viewsets.ModelViewSet):
  serializer_class = RequestDocumentSerializer
  queryset = Request_document.objects.all()

class RequestDocumentStatusView(viewsets.ModelViewSet):
  serializer_class = RequestDocumentStatusSerializer
  queryset = Request_document_status.objects.all()
