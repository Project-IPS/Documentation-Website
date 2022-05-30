from rest_framework import serializers
from .models import Testimonial

class DocSiteSerializer(serializers.ModelSerializer):

    class Meta:
        model= Testimonial
        fields=('firstName','lastName','testimonial')

    

