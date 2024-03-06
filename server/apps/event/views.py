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

  def get_queryset(self):
    id_user = self.request.query_params.get('id_user')
    if id_user:
        queryset = User_event.objects.filter(id_user=id_user)
    else:
        queryset = User_event.objects.all()
    return queryset