from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated 

from drfapp.serializers import StudentSerializer
from drfapp.models import Student


class TestView(APIView):
    #permission_classes = () to AllowAny 
    permission_classes = (IsAuthenticated, )
    
    # GET method
    def get(self, request, *args, **kwargs):
        qs = Student.objects.all()
        serializer = StudentSerializer(qs, many=True)
        return Response(serializer.data)
    
    # POST method
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors)
    