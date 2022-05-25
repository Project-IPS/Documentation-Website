from django.contrib import admin
from .models import Testimonial

# class docsiteAdmin(admin.ModelAdmin):
#     list_display= ('firstName','lastName','testimonial')

# Register your models here.

admin.site.register(Testimonial)
