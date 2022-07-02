from django.contrib import admin
from .models import formData, Blogs, careers

class formDataAdmin(admin.ModelAdmin):
     list_display= ('name')

# Register your models here.

# admin.site.register(formData)
admin.site.register(Blogs)
admin.site.register(careers)

