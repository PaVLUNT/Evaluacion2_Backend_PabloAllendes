# consultoria/api/serializers.py
from rest_framework import serializers


class ServicioSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nombre = serializers.CharField(max_length=200)
    descripcion = serializers.CharField()
    precio = serializers.DecimalField(max_digits=10, decimal_places=2)


class SolicitudSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    servicio_id = serializers.IntegerField()
    cliente_empresa = serializers.CharField(max_length=200)
    cliente_contacto = serializers.CharField(max_length=200)
    cliente_email = serializers.EmailField()
    descripcion_proyecto = serializers.CharField()
    presupuesto_estimado = serializers.DecimalField(max_digits=12, decimal_places=2)
    estado = serializers.CharField(max_length=50, default='en_evaluacion')
    fecha = serializers.DateField()