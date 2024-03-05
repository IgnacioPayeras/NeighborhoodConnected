from rest_framework import serializers
from .models import *

class EventSerializer(serializers.ModelSerializer):
  class Meta:
    model = Event
    fields = "__all__"

class UserEventSerializer(serializers.ModelSerializer):
  class Meta:
    model = User_event
    fields = "__all__"
