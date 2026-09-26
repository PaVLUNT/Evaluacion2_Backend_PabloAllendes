# consultoria/api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from ..infrastructure.repositories import SQLiteServicioRepository, SQLiteSolicitudRepository
from ..application.servicio_casos_uso import (
    ListarServicios, ObtenerServicio, CrearServicio, ActualizarServicio, EliminarServicio
)
from ..application.solicitud_casos_uso import (
    ListarSolicitudes, ObtenerSolicitud, CrearSolicitud, ActualizarSolicitud, EliminarSolicitud
)
from .serializers import ServicioSerializer, SolicitudSerializer


class ServicioListCreateView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        repo = SQLiteServicioRepository()
        servicios = ListarServicios(repo).ejecutar()
        data = [ServicioSerializer(s).data for s in servicios]
        return Response(data)

    def post(self, request):
        serializer = ServicioSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        repo = SQLiteServicioRepository()
        nuevo = CrearServicio(repo).ejecutar(**serializer.validated_data)
        return Response(ServicioSerializer(nuevo).data, status=status.HTTP_201_CREATED)


class ServicioDetailView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        repo = SQLiteServicioRepository()
        servicio = ObtenerServicio(repo).ejecutar(id)
        if servicio is None:
            return Response({'error': 'Servicio no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        return Response(ServicioSerializer(servicio).data)

    def put(self, request, id):
        repo = SQLiteServicioRepository()
        actualizado = ActualizarServicio(repo).ejecutar(id, request.data)
        return Response(ServicioSerializer(actualizado).data)

    def delete(self, request, id):
        repo = SQLiteServicioRepository()
        EliminarServicio(repo).ejecutar(id)
        return Response(status=status.HTTP_204_NO_CONTENT)


class SolicitudListCreateView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        repo = SQLiteSolicitudRepository()
        solicitudes = ListarSolicitudes(repo).ejecutar()
        data = [SolicitudSerializer(s).data for s in solicitudes]
        return Response(data)

    def post(self, request):
        serializer = SolicitudSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        repo = SQLiteSolicitudRepository()
        nueva = CrearSolicitud(repo).ejecutar(serializer.validated_data)
        return Response(SolicitudSerializer(nueva).data, status=status.HTTP_201_CREATED)


class SolicitudDetailView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        repo = SQLiteSolicitudRepository()
        solicitud = ObtenerSolicitud(repo).ejecutar(id)
        if solicitud is None:
            return Response({'error': 'Solicitud no encontrada'}, status=status.HTTP_404_NOT_FOUND)
        return Response(SolicitudSerializer(solicitud).data)

    def put(self, request, id):
        repo = SQLiteSolicitudRepository()
        actualizada = ActualizarSolicitud(repo).ejecutar(id, request.data)
        return Response(SolicitudSerializer(actualizada).data)

    def delete(self, request, id):
        repo = SQLiteSolicitudRepository()
        EliminarSolicitud(repo).ejecutar(id)
        return Response(status=status.HTTP_204_NO_CONTENT)