from rest_framework import serializers
from .models import Blogs, Testimonial, formData, contactDetails, careers

# class DocSiteSerializer(serializers.ModelSerializer):

#     class Meta:
#         model= Testimonial
#         fields=('firstName','lastName','testimonial')

class formDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=formData
        fields='__all__'

class blogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= Blogs
        fields=('title','description')

class contactDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model= contactDetails
        fields=('firstName','lastName','email','contactNumber','companyName','companyType')
class careersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= careers
        fields=('positionName','techstack','location','duration','qualification1','qualification2')

    

