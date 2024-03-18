from django.db import models

class News(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    author = models.CharField(max_length=100, null=False, blank=False)
    text = models.TextField()
    img = models.ImageField(upload_to='news/')



class Projects(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    author = models.CharField(max_length=100, null=False, blank=False)
    text = models.TextField()
    img = models.ImageField(upload_to='projects/')
