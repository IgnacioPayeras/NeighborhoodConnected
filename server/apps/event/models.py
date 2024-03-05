from django.db import models
from apps.user.models import User

# Create your models here.
class Event(models.Model):
  title = models.CharField(max_length=100)
  datetime = models.DateTimeField()
  location = models.CharField(max_length=50)
  description = models.TextField()
  id_created_by = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.title}"
  
class User_event(models.Model):
  id_user = models.ForeignKey(User, on_delete=models.CASCADE)
  id_event = models.ForeignKey(Event, on_delete=models.CASCADE)

  class Meta:
    unique_together = ('id_user', 'id_event')

  def __str__(self):
    return f"{self.id_user} {self.id_event}"