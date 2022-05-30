
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router= routers.DefaultRouter()
router.register(r'testimonial',views.TestimonialView,'Testimonial')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
