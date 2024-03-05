from django.db import models
from apps.account.models import Account

# Create your models here.
class Announcement(models.Model):
  title = models.CharField(max_length=50)
  content = models.TextField()
  pub_datetime = models.DateTimeField()
  id_account = models.ForeignKey(Account, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.title}"