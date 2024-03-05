from django.urls import path, include
from rest_framework import routers
from apps.announcement import views

router = routers.DefaultRouter()
router.register(r'announcements', views.AnnouncementView, 'announcements')

urlpatterns = [
  path("api/", include(router.urls))
]