
from rest_framework import viewsets, permissions
from .models import Task
from tasks.serializer import TaskSerializer
# Create your views here.



class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
