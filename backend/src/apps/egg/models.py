from django.db import models

# Create your models here.
class Cliente(models.Model):
    codcliente = models.IntegerField()
    nomcliente = models.CharField(max_length=100)
    apellcliente = models.CharField(max_length=100)
    direcliente = models.CharField(max_length=100)
    telcliente = models.IntegerField()
    ndoc = models.IntegerField() 

class Product(models.Model):
    codigo = models.IntegerField()
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    imagen = models.ImageField(upload_to='media/products')
    # preciototal = models.IntegerField()
    # cantidad = models.IntegerField()


class Compra(models.Model):
    precio = models.IntegerField()
    fecha = models.IntegerField()
    cantidad = models.IntegerField()


class Factura(models.Model):
    codifactura = models.IntegerField()
    codiproducto = models.IntegerField()
    fechacompra = models.IntegerField()
    nomcliente = models.CharField(max_length=100)
