from django.contrib import admin
from .models import formData

class formDataAdmin(admin.ModelAdmin):
     list_display= ('name')

# Register your models here.

admin.site.register(formData)
