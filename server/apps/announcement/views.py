from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class AnnouncementView(viewsets.ModelViewSet):
  serializer_class = AnnouncementSerializer
  queryset = Announcement.objects.all()
