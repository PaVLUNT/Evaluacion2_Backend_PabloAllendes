import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { crearSolicitud } from '../services/consultoriaApi.js'

function AgregarSolicitud() {
  const navigate = useNavigate()

  const [empresa, setEmpresa] = useState('')
  const [contacto, setContacto] = useState('')
  const [email, setEmail] = useState('')
  const [servicioId, setServicioId] = useState('')
  const [descripcionProyecto, setDescripcionProyecto] = useState('')
  const [presupuestoEstimado, setPresupuestoEstimado] = useState('')

  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(null)

  async function manejarEnvio(e) {
    e.preventDefault()
    setEnviando(true)
    setError(null)

    const nuevaSolicitud = {
      cliente: {
        empresa,
        contacto,
        email,
      },
      servicioId,
      descripcionProyecto,
      presupuestoEstimado: Number(presupuestoEstimado),
      estado: 'en_evaluacion',
      fecha: new Date().toISOString().split('T')[0],
    }

    try {
      await crearSolicitud(nuevaSolicitud)
      navigate('/solicitudes')
    } catch (err) {
      setError(err.message)
      setEnviando(false)
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Agregar Solicitud</h1>

      <form onSubmit={manejarEnvio}>
        <div>
          <label>Empresa</label>
          <input
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Contacto</label>
          <input
            type="text"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Servicio de interés</label>
          <input
            type="text"
            value={servicioId}
            onChange={(e) => setServicioId(e.target.value)}
            placeholder="ej: ciberseguridad, migracion-nube"
            required
          />
        </div>

        <div>
          <label>Descripción del proyecto</label>
          <textarea
            value={descripcionProyecto}
            onChange={(e) => setDescripcionProyecto(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Presupuesto estimado</label>
          <input
            type="number"
            value={presupuestoEstimado}
            onChange={(e) => setPresupuestoEstimado(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar solicitud'}
        </button>
      </form>
    </div>
  )
}

export default AgregarSolicitud