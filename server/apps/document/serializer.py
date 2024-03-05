from rest_framework import serializers
from .models import *

class RequestDocumentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Request_document
    fields = "__all__"
    
class RequestDocumentStatusSerializer(serializers.ModelSerializer):
  class Meta:
    model = Request_document_status
    fields = "__all__"
