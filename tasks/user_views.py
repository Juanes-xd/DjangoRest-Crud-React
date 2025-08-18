from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .user_serializer import UserRegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        # Generar tokens JWT
        refresh = RefreshToken.for_user(serializer.instance)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": serializer.data
        }, status=status.HTTP_201_CREATED)
