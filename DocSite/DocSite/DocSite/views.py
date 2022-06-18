from django.shortcuts import render
from rest_framework.views import APIView 
from .models import formData
from .serializers import formDataSerializer
from rest_framework import viewsets,permissions
from rest_framework.response import Response
from django.http import HttpResponse

# def index(request):
#     return render(request, "")

# class TestimonialView(viewsets.ModelViewSet):
#     serializer_class= DocSiteSerializer
#     queryset=Testimonial.objects.all()


class formDataView(viewsets.ModelViewSet):
    
    queryset= formData.objects.all()
    permission_classes=[permissions.AllowAny]
    serializer_class= formDataSerializer

    def get(self, request):
        name = [{"name": name.name}]
        return Response(name)

    def post(self, request):
        serializer = formDataSerializer(data = request.data)
        if serializer.is_valid(raise_exceptions=True):
            serializer.save()
            return Response(serializer.data)

# class formDataView(APIView):
#     serializer_class = formDataSerializer

#     def get(self, request):
#         name = [{"name": name.name}]
#         return Response(name)

#     def post(self, request):
#         serializer = formDataSerializer(data = request.data)
#         if serializer.is_valid(raise_exceptions=True):
#             serializer.save()
#             return Response(serializer.data)

# @api_view(['POST'])
# def formDataView(request):
#     if(request.method=='POST'):
#         data=JSONParser().parse(request)
#         serializer=formDataSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
