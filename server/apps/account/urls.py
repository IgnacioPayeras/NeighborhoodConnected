from django.urls import path, include
from rest_framework import routers
from apps.account import views

router = routers.DefaultRouter()
router.register(r'accounts', views.AccountView, 'accounts')
router.register(r'account_roles', views.AccountRoleView, 'accounts_roles')


urlpatterns = [
  path("api/", include(router.urls)),
  path("api/login/", views.user_login, name="login"),
]