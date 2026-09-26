import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSolicitudes } from '../services/consultoriaApi.js'

function VerSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarSolicitudes() {
      try {
        const datos = await getSolicitudes()
        setSolicitudes(datos)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    cargarSolicitudes()
  }, [])

  if (cargando) return <p>Cargando solicitudes...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>Solicitudes de Consultoría</h1>

      {solicitudes.length === 0 && <p>No hay solicitudes registradas.</p>}

      {solicitudes.map((solicitud) => (
        <div key={solicitud._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <p><strong>Empresa:</strong> {solicitud.cliente.empresa}</p>
        <p><strong>Contacto:</strong> {solicitud.cliente.contacto}</p>
        <p><strong>Email:</strong> {solicitud.cliente.email}</p>
        <p><strong>Proyecto:</strong> {solicitud.descripcionProyecto}</p>
        <p><strong>Presupuesto:</strong> ${solicitud.presupuestoEstimado}</p>
        <p><strong>Estado:</strong> {solicitud.estado}</p>
        <Link to={`/solicitudes/editar/${solicitud._id}`}>Editar</Link>
        {' | '}
        <Link to={`/solicitudes/eliminar/${solicitud._id}`}>Eliminar</Link>
      </div>
    ))}
    </div>
  )
}

export default VerSolicitudes