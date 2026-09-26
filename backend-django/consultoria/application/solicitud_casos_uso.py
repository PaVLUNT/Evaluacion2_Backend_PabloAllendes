# consultoria/application/solicitud_casos_uso.py
from ..domain.entities import Solicitud


class ListarSolicitudes:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self):
        return self.repositorio.listar()


class ObtenerSolicitud:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, id):
        return self.repositorio.obtener(id)


class CrearSolicitud:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, datos):
        solicitud = Solicitud(
            id=None,
            servicio_id=datos['servicio_id'],
            cliente_empresa=datos['cliente_empresa'],
            cliente_contacto=datos['cliente_contacto'],
            cliente_email=datos['cliente_email'],
            descripcion_proyecto=datos['descripcion_proyecto'],
            presupuesto_estimado=datos['presupuesto_estimado'],
            estado=datos.get('estado', 'en_evaluacion'),
            fecha=datos['fecha'],
        )
        return self.repositorio.crear(solicitud)


class ActualizarSolicitud:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, id, datos):
        return self.repositorio.actualizar(id, datos)


class EliminarSolicitud:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, id):
        return self.repositorio.eliminar(id)