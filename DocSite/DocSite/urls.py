from django.contrib import admin
from django.urls import path, include
from . import DocSite

urlpatterns = [ 
    path('', include(DocSite.urls)),
]