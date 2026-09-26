import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSolicitud, actualizarSolicitud } from '../services/consultoriaApi.js'

function EditarSolicitud() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [empresa, setEmpresa] = useState('')
  const [contacto, setContacto] = useState('')
  const [email, setEmail] = useState('')
  const [servicioId, setServicioId] = useState('')
  const [descripcionProyecto, setDescripcionProyecto] = useState('')
  const [presupuestoEstimado, setPresupuestoEstimado] = useState('')
  const [estado, setEstado] = useState('')

  const [cargando, setCargando] = useState(true)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarSolicitud() {
      try {
        const datos = await getSolicitud(id)
        setEmpresa(datos.cliente.empresa)
        setContacto(datos.cliente.contacto)
        setEmail(datos.cliente.email)
        setServicioId(datos.servicioId)
        setDescripcionProyecto(datos.descripcionProyecto)
        setPresupuestoEstimado(datos.presupuestoEstimado)
        setEstado(datos.estado)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    cargarSolicitud()
  }, [id])

  async function manejarEnvio(e) {
    e.preventDefault()
    setEnviando(true)
    setError(null)

    const datosActualizados = {
      cliente: {
        empresa,
        contacto,
        email,
      },
      servicioId,
      descripcionProyecto,
      presupuestoEstimado: Number(presupuestoEstimado),
      estado,
    }

    try {
      await actualizarSolicitud(id, datosActualizados)
      navigate('/solicitudes')
    } catch (err) {
      setError(err.message)
      setEnviando(false)
    }
  }

  if (cargando) return <p>Cargando solicitud...</p>

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Editar Solicitud</h1>

      <form onSubmit={manejarEnvio}>
        <div>
          <label>Empresa</label>
          <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} required />
        </div>

        <div>
          <label>Contacto</label>
          <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div>
          <label>Servicio de interés</label>
          <input type="text" value={servicioId} onChange={(e) => setServicioId(e.target.value)} required />
        </div>

        <div>
          <label>Descripción del proyecto</label>
          <textarea value={descripcionProyecto} onChange={(e) => setDescripcionProyecto(e.target.value)} required />
        </div>

        <div>
          <label>Presupuesto estimado</label>
          <input type="number" value={presupuestoEstimado} onChange={(e) => setPresupuestoEstimado(e.target.value)} required />
        </div>

        <div>
          <label>Estado</label>
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="en_evaluacion">En evaluación</option>
            <option value="aprobado">Aprobado</option>
            <option value="rechazado">Rechazado</option>
          </select>
        </div>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <button type="submit" disabled={enviando}>
          {enviando ? 'Guardando...' : 'Guardar cambios'}
        </button>
      </form>
    </div>
  )
}

export default EditarSolicitud