# consultoria/domain/entities.py

class Servicio:
    def __init__(self, id, nombre, descripcion, precio):
        self.id = id
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio


class Solicitud:
    def __init__(self, id, servicio_id, cliente_empresa, cliente_contacto,
                 cliente_email, descripcion_proyecto, presupuesto_estimado,
                 estado, fecha):
        self.id = id
        self.servicio_id = servicio_id
        self.cliente_empresa = cliente_empresa
        self.cliente_contacto = cliente_contacto
        self.cliente_email = cliente_email
        self.descripcion_proyecto = descripcion_proyecto
        self.presupuesto_estimado = presupuesto_estimado
        self.estado = estado
        self.fecha = fecha