from django.db import models
from django.utils import timezone

class News(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    author = models.CharField(max_length=100, null=False, blank=False)
    text = models.TextField()
    img = models.ImageField(upload_to='news/')
    time = models.DateTimeField(default=timezone.now, null=False)


class Projects(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    author = models.CharField(max_length=100, null=False, blank=False)
    text = models.TextField()
    img = models.ImageField(upload_to='projects/')
    req_money = models.DecimalField(max_digits=20, decimal_places=2, null=False)
    coll_money = models.DecimalField(max_digits=20, decimal_places=2, null=False)
    active = models.BooleanField(default=True, null=False)