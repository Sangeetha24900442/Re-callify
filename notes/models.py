from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Quiz(models.Model):
    note = models.ForeignKey(Note, on_delete=models.CASCADE)
    question = models.TextField()
    answer = models.TextField()

