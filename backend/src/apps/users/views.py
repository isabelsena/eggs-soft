"""
    Views
"""

# From rest framework
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

# From local app
from .serializers import UserSerializer, CurrentUserSerializer
from .models import User


class RegisterGeneric(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class CurrentUserView(APIView):
    serializer_class = CurrentUserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)
