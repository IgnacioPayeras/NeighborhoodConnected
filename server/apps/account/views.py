from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class AccountView(viewsets.ModelViewSet):
  serializer_class = AccountSerializer
  queryset = Account.objects.all()

class AccountRoleView(viewsets.ModelViewSet):
  serializer_class = AccountRoleSerializer
  queryset = Account_role.objects.all()