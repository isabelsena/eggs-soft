from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    """ 
        Product Serializer
    """
    class Meta:
        model = Product
        fields = (
            'id',
            'codigo',
            'nombre',
            'precio',
            'imagen',
        )
