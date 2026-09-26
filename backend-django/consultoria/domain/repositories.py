# consultoria/domain/repositories.py
from abc import ABC, abstractmethod


class ServicioRepository(ABC):
    @abstractmethod
    def listar(self):
        pass

    @abstractmethod
    def obtener(self, id):
        pass

    @abstractmethod
    def crear(self, servicio):
        pass

    @abstractmethod
    def actualizar(self, id, datos):
        pass

    @abstractmethod
    def eliminar(self, id):
        pass


class SolicitudRepository(ABC):
    @abstractmethod
    def listar(self):
        pass

    @abstractmethod
    def obtener(self, id):
        pass

    @abstractmethod
    def crear(self, solicitud):
        pass

    @abstractmethod
    def actualizar(self, id, datos):
        pass

    @abstractmethod
    def eliminar(self, id):
        pass