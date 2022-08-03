"""
    Viewsets
"""
# from rest framework
from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

# From locals
from .models import User
from .serializers import CurrentUserSerializer


class UserViewSet(
        mixins.ListModelMixin,
        mixins.UpdateModelMixin,
        viewsets.GenericViewSet
    ):
    queryset = User.objects.all()
    serializer_class = CurrentUserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return User.objects.filter(pk=self.request.user.id)

