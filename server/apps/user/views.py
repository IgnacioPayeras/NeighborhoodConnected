from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer

  def get_queryset(self):
    id_user = self.request.query_params.get('id_user')
    if id_user:
        queryset = User.objects.get(id_user=id_user)
    else:
        queryset = User.objects.all()
    return queryset

class UserRoleView(viewsets.ModelViewSet):
  serializer_class = UserRoleSerializer
  queryset = User_role.objects.all()