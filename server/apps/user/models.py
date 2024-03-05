from django.db import models

# Create your models here.
class User_role(models.Model):
  type = models.CharField(max_length=20)

  def __str__(self):
    return f"{self.type}"
  
class User(models.Model):
  rut = models.CharField(max_length=15, unique=True)
  names = models.CharField(max_length=50)
  lastnames = models.CharField(max_length=50)
  birthdate = models.DateField()
  address = models.CharField(max_length=100)
  phone = models.CharField(max_length=20)
  id_user_role = models.ForeignKey(User_role, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.names} {self.lastnames} {self.id_account}"
