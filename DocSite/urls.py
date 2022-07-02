from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
# from rest_framework import routers
from . import DocSite, views


# router=routers.DefaultRouter()
# router.register(r'blog', views.BlogViewSet)


urlpatterns = [ 
    path('', include(DocSite.urls)),
    path('admin/', admin.site.urls)

]
urlpatterns= urlpatterns + static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)