
from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path, include
from rest_framework import routers
from . import views
from .views import formDataView

router= routers.DefaultRouter()
# # router.register(r'testimonial',views.TestimonialView,'Testimonial')
router.register(r'formData',formDataView, 'DocSite')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls))
]
