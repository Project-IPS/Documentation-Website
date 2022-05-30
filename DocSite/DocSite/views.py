from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DocSiteSerializer
from .models import Testimonial
from django.http import HttpResponse

# def index(request):
#     return render(request, "")

class TestimonialView(viewsets.ModelViewSet):
    serializer_class= DocSiteSerializer
    queryset=Testimonial.objects.all()


# Create your views here.
