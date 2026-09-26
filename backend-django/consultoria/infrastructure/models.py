# consultoria/infrastructure/models.py
from django.db import models


class ServicioModel(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre


class SolicitudModel(models.Model):
    servicio = models.ForeignKey(ServicioModel, on_delete=models.CASCADE, related_name='solicitudes')
    cliente_empresa = models.CharField(max_length=200)
    cliente_contacto = models.CharField(max_length=200)
    cliente_email = models.EmailField()
    descripcion_proyecto = models.TextField()
    presupuesto_estimado = models.DecimalField(max_digits=12, decimal_places=2)
    estado = models.CharField(max_length=50, default='en_evaluacion')
    fecha = models.DateField()

    def __str__(self):
        return f"Solicitud de {self.cliente_empresa}"