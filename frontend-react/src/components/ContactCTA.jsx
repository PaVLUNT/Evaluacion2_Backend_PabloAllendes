import { useState } from "react";

function ContactCTA() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(false);

    if (nombre === "" || correo === "" || mensaje === "") {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (!correo.includes("@")) {
      setError("Ingresa un correo válido.");
      return;
    }

    setError("");
    setEnviado(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contáctanos</h2>

        <form
          className="mx-auto"
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
        >
          {error && <div className="alert alert-danger">{error}</div>}
          {enviado && (
            <div className="alert alert-success">
              ¡Gracias! Te contactaremos pronto.
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="text"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              rows="4"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactCTA;
