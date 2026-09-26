# consultoria/api/urls.py
from django.urls import path
from .views import (
    ServicioListCreateView, ServicioDetailView,
    SolicitudListCreateView, SolicitudDetailView
)

urlpatterns = [
    path('servicios/', ServicioListCreateView.as_view()),
    path('servicios/<int:id>/', ServicioDetailView.as_view()),
    path('solicitudes/', SolicitudListCreateView.as_view()),
    path('solicitudes/<int:id>/', SolicitudDetailView.as_view()),
]