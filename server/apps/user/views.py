from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()

class UserRoleView(viewsets.ModelViewSet):
  serializer_class = UserRoleSerializer
  queryset = User_role.objects.all()