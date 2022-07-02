
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from . import views


router= routers.DefaultRouter()
# # router.register(r'testimonial',views.TestimonialView,'Testimonial')
# router.register(r'formData',formDataView, 'DocSite')
router.register(r'blogs', views.BlogsViewSet)
router.register(r'contactDetails', views.contactDetailsViewSet)
router.register(r'careers', views.careersViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]
