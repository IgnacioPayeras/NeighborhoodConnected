from django.db import models
from apps.user.models import User

# Create your models here.
class Account_role(models.Model):
  type = models.CharField(max_length=20)

  def __str__(self):
    return f"{self.type}"
  
class Account(models.Model):
  username = models.CharField(max_length=100)
  password = models.CharField(max_length=100)
  id_user = models.ForeignKey(User, on_delete=models.CASCADE)
  id_account_role = models.ForeignKey(Account_role, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.username} {self.id_account_role} {self.id_user}"