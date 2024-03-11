from rest_framework.decorators import api_view
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from .serializer import *
from .models import *

# Create your views here.
class AccountView(viewsets.ModelViewSet):
  serializer_class = AccountSerializer
  queryset = Account.objects.all()

class AccountRoleView(viewsets.ModelViewSet):
  serializer_class = AccountRoleSerializer
  queryset = Account_role.objects.all()

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)
        account = Account.objects.get(username=username)  # Obtenemos la cuenta
        serializer = AccountSerializer(account)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Username or password incorrect'}, status=status.HTTP_401_UNAUTHORIZED)
