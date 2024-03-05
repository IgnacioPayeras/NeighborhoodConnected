from django.db import models
from apps.account.models import Account

# Create your models here.
class Report_status(models.Model):
  name = models.CharField(max_length=50)

  def __str__(self):
    return f"{self.name}"
  
class Report(models.Model):
  title = models.CharField(max_length=50)
  description = models.TextField()
  report_datetime = models.DateTimeField()
  id_report_status = models.ForeignKey(Report_status, on_delete=models.CASCADE)
  id_account = models.ForeignKey(Account, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.title}"
