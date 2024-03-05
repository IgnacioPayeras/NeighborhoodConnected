from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class EventView(viewsets.ModelViewSet):
  serializer_class = EventSerializer
  queryset = Event.objects.all()

class UserEventView(viewsets.ModelViewSet):
  serializer_class = UserEventSerializer
  queryset = User_event.objects.all()