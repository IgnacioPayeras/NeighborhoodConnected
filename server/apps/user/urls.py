from django.urls import path, include
from rest_framework import routers
from apps.user import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')
router.register(r'users_role', views.UserRoleView, 'users_role')

urlpatterns = [
  path("api/", include(router.urls))
]