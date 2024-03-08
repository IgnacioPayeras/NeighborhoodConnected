from django.db import models
from apps.account.models import Account

# Create your models here.
class Request_document_status(models.Model):
  name = models.CharField(max_length=100)
  
  def __str__(self):
    return f"{self.name}"
  
class Request_document(models.Model):
  date_request = models.DateField()
  date_final_status = models.DateField(null=True, blank=True)
  id_request_document_status = models.ForeignKey(Request_document_status, on_delete=models.CASCADE)
  id_user = models.ForeignKey(Account, related_name="requesting_user", on_delete=models.CASCADE)
  id_admin = models.ForeignKey(Account, related_name="responder_admin", on_delete=models.CASCADE, null=True, blank=True)

  def __str__(self):
    return f"{self.id_user} {self.date_request}"