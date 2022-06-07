from rest_framework import serializers
from .models import Testimonial, formData

# class DocSiteSerializer(serializers.ModelSerializer):

#     class Meta:
#         model= Testimonial
#         fields=('firstName','lastName','testimonial')

class formDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=formData
        fields='__all__'

    

