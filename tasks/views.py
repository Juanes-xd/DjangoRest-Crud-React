from .models import Task
from django.shortcuts import render
from rest_framework import viewsets
from tasks.serializer import TaskSerializer
# Create your views here.



class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
