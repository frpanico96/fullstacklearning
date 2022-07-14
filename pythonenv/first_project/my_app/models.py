from django.db import models

# Create your models here.
class Feature(models.Model):
    # id: int # Not needed since it will be generated automatically
    name = models.CharField(max_length=100)
    details = models.CharField(max_length=500)