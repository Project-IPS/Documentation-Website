from django.db import models
from datetime import datetime

class Testimonial(models.Model):
    firstName=models.CharField(max_length=64, default="Anonymous")
    lastName=models.CharField(max_length=64, default="")
    testimonial = models.CharField(max_length=120)

    def __str__(self):
        return self.testimonial
    
class formData(models.Model):
    name=models.CharField(max_length=64, default="Anonymous")

    def __str__(self):
        return self.name

class Blogs(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=1000)

    def __str__(self):
        return self.title

class contactDetails(models.Model):
    firstName=models.CharField(max_length=100)
    lastName=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    contactNumber=models.CharField(max_length=10)
    companyName=models.CharField(max_length=100)
    companyType=models.CharField(max_length=100)

    def __str__(self):
        return self.firstName

class careers(models.Model):
    positionName=models.CharField(max_length=100)
    techstack=models.CharField(max_length=100)
    location=models.CharField(max_length=100)
    duration=models.CharField(max_length=10)
    qualification1=models.CharField(max_length=1000)
    qualification2=models.CharField(max_length=1000)

    def __str__(self):
        return self.positionName


# Create your models here.
