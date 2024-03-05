from django.urls import path, include
from rest_framework import routers
from apps.event import views

router = routers.DefaultRouter()
router.register(r'events', views.EventView, 'events')
router.register(r'user_events', views.UserEventView, 'user_events')

urlpatterns = [
  path("api/", include(router.urls))
]