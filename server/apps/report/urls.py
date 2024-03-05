from django.urls import path, include
from rest_framework import routers
from apps.report import views

router = routers.DefaultRouter()
router.register(r'reports', views.ReportView, 'reports')
router.register(r'reports_status', views.ReportStatusView, 'reports_status')

urlpatterns = [
  path("api/", include(router.urls))
]