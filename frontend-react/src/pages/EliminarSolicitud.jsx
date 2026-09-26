import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSolicitud, eliminarSolicitud } from '../services/consultoriaApi.js'

function EliminarSolicitud() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [solicitud, setSolicitud] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [eliminando, setEliminando] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarSolicitud() {
      try {
        const datos = await getSolicitud(id)
        setSolicitud(datos)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    cargarSolicitud()
  }, [id])

  async function manejarEliminar() {
    setEliminando(true)
    setError(null)

    try {
      await eliminarSolicitud(id)
      navigate('/solicitudes')
    } catch (err) {
      setError(err.message)
      setEliminando(false)
    }
  }

  if (cargando) return <p>Cargando solicitud...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>
  if (!solicitud) return <p>Solicitud no encontrada.</p>

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Eliminar Solicitud</h1>

      <p>¿Estás seguro de que quieres eliminar esta solicitud?</p>

      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        <p><strong>Empresa:</strong> {solicitud.cliente.empresa}</p>
        <p><strong>Contacto:</strong> {solicitud.cliente.contacto}</p>
        <p><strong>Proyecto:</strong> {solicitud.descripcionProyecto}</p>
        <p><strong>Presupuesto:</strong> ${solicitud.presupuestoEstimado}</p>
      </div>

      <button onClick={manejarEliminar} disabled={eliminando} style={{ background: 'red', color: 'white' }}>
        {eliminando ? 'Eliminando...' : 'Sí, eliminar'}
      </button>
      {' '}
      <button onClick={() => navigate('/solicitudes')}>Cancelar</button>
    </div>
  )
}

export default EliminarSolicitud