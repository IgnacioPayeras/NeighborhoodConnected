from rest_framework import serializers
from .models import *

class ReportStatusSerializer(serializers.ModelSerializer):
  class Meta:
    model = Report_status
    fields = "__all__"

class ReportSerializer(serializers.ModelSerializer):
  class Meta:
    model = Report
    fields = "__all__"
