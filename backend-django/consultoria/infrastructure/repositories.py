# consultoria/infrastructure/repositories.py
from ..domain.repositories import ServicioRepository, SolicitudRepository
from ..domain.entities import Servicio, Solicitud
from .models import ServicioModel, SolicitudModel


class SQLiteServicioRepository(ServicioRepository):

    def listar(self):
        return [self._a_entidad(m) for m in ServicioModel.objects.all()]

    def obtener(self, id):
        try:
            m = ServicioModel.objects.get(id=id)
            return self._a_entidad(m)
        except ServicioModel.DoesNotExist:
            return None

    def crear(self, servicio):
        m = ServicioModel.objects.create(
            nombre=servicio.nombre,
            descripcion=servicio.descripcion,
            precio=servicio.precio,
        )
        return self._a_entidad(m)

    def actualizar(self, id, datos):
        ServicioModel.objects.filter(id=id).update(**datos)
        return self.obtener(id)

    def eliminar(self, id):
        ServicioModel.objects.filter(id=id).delete()

    def _a_entidad(self, m):
        return Servicio(id=m.id, nombre=m.nombre, descripcion=m.descripcion, precio=m.precio)


class SQLiteSolicitudRepository(SolicitudRepository):

    def listar(self):
        return [self._a_entidad(m) for m in SolicitudModel.objects.all()]

    def obtener(self, id):
        try:
            m = SolicitudModel.objects.get(id=id)
            return self._a_entidad(m)
        except SolicitudModel.DoesNotExist:
            return None

    def crear(self, solicitud):
        m = SolicitudModel.objects.create(
            servicio_id=solicitud.servicio_id,
            cliente_empresa=solicitud.cliente_empresa,
            cliente_contacto=solicitud.cliente_contacto,
            cliente_email=solicitud.cliente_email,
            descripcion_proyecto=solicitud.descripcion_proyecto,
            presupuesto_estimado=solicitud.presupuesto_estimado,
            estado=solicitud.estado,
            fecha=solicitud.fecha,
        )
        return self._a_entidad(m)

    def actualizar(self, id, datos):
        SolicitudModel.objects.filter(id=id).update(**datos)
        return self.obtener(id)

    def eliminar(self, id):
        SolicitudModel.objects.filter(id=id).delete()

    def _a_entidad(self, m):
        return Solicitud(
            id=m.id, servicio_id=m.servicio_id, cliente_empresa=m.cliente_empresa,
            cliente_contacto=m.cliente_contacto, cliente_email=m.cliente_email,
            descripcion_proyecto=m.descripcion_proyecto, presupuesto_estimado=m.presupuesto_estimado,
            estado=m.estado, fecha=m.fecha,
        )