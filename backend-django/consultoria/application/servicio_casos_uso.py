# consultoria/application/servicio_casos_uso.py
from ..domain.entities import Servicio


class ListarServicios:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self):
        return self.repositorio.listar()


class ObtenerServicio:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, id):
        return self.repositorio.obtener(id)


class CrearServicio:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, nombre, descripcion, precio):
        servicio = Servicio(id=None, nombre=nombre, descripcion=descripcion, precio=precio)
        return self.repositorio.crear(servicio)


class ActualizarServicio:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, id, datos):
        return self.repositorio.actualizar(id, datos)


class EliminarServicio:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def ejecutar(self, id):
        return self.repositorio.eliminar(id)