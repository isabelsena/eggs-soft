"""
    Viewsets
"""
# from rest framework
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# From locals
from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAuthenticated,)
