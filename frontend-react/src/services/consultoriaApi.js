const BASE_URL = 'http://127.0.0.1:8000/api/solicitudes/'
const TOKEN = 'adfcb5aef6d2b9ceba39b816477acf3755139418' // el que te devolvió /api/token/

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Token ${TOKEN}`,
}

// Convierte lo que devuelve Django (snake_case, plano) al formato que ya usan tus páginas
function aFormatoFrontend(item) {
  return {
    _id: item.id,
    cliente: {
      empresa: item.cliente_empresa,
      contacto: item.cliente_contacto,
      email: item.cliente_email,
    },
    servicioId: item.servicio_id,
    descripcionProyecto: item.descripcion_proyecto,
    presupuestoEstimado: Number(item.presupuesto_estimado),
    estado: item.estado,
    fecha: item.fecha,
  }
}

// Convierte lo que arman tus formularios (camelCase, anidado) al formato que espera Django
function aFormatoBackend(solicitud) {
  return {
    servicio_id: Number(solicitud.servicioId),
    cliente_empresa: solicitud.cliente.empresa,
    cliente_contacto: solicitud.cliente.contacto,
    cliente_email: solicitud.cliente.email,
    descripcion_proyecto: solicitud.descripcionProyecto,
    presupuesto_estimado: solicitud.presupuestoEstimado,
    estado: solicitud.estado,
    fecha: solicitud.fecha,
  }
}

export async function getSolicitudes() {
  const res = await fetch(BASE_URL, { headers })
  if (!res.ok) throw new Error('Error al obtener solicitudes')
  const data = await res.json()
  return data.map(aFormatoFrontend)
}

export async function getSolicitud(id) {
  const res = await fetch(`${BASE_URL}${id}/`, { headers })
  if (!res.ok) throw new Error('Solicitud no encontrada')
  const data = await res.json()
  return aFormatoFrontend(data)
}

export async function crearSolicitud(solicitud) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(aFormatoBackend(solicitud)),
  })
  if (!res.ok) throw new Error('Error al crear solicitud')
  const data = await res.json()
  return aFormatoFrontend(data)
}

export async function actualizarSolicitud(id, datosActualizados) {
  const res = await fetch(`${BASE_URL}${id}/`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(aFormatoBackend(datosActualizados)),
  })
  if (!res.ok) throw new Error('Error al actualizar solicitud')
  const data = await res.json()
  return aFormatoFrontend(data)
}

export async function eliminarSolicitud(id) {
  const res = await fetch(`${BASE_URL}${id}/`, {
    method: 'DELETE',
    headers,
  })
  if (!res.ok) throw new Error('Error al eliminar solicitud')
}