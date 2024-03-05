from django.urls import path, include
from rest_framework import routers
from apps.document import views

router = routers.DefaultRouter()
router.register(r'request_documents', views.RequestDocumentView, 'request_documents')
router.register(r'request_documents_status', views.RequestDocumentStatusView, 'request_documents_status')

urlpatterns = [
  path("api/", include(router.urls))
]