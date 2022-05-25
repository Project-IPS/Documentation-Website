from django.db import models
from datetime import datetime

class Testimonial(models.Model):
    firstName=models.CharField(max_length=64, default="Anonymous")
    lastName=models.CharField(max_length=64, default="")
    testimonial = models.CharField(max_length=120)

    def __str__(self):
        return self.testimonial

# Create your models here.
