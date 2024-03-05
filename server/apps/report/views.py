from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class ReportView(viewsets.ModelViewSet):
  serializer_class = ReportSerializer
  queryset = Report.objects.all()

class ReportStatusView(viewsets.ModelViewSet):
  serializer_class = ReportStatusSerializer
  queryset = Report_status.objects.all()
