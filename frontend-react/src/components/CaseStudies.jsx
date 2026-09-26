import { useState } from "react";

const casos = [
  {
    id: 1,
    cliente: "Empresa de retail",
    resumen: "Migramos su tienda online a la nube y bajaron sus costos.",
    detalle:
      "El cliente tenía servidores propios que se caían en fechas de alta demanda. Migramos su tienda online a la nube y logramos que no se cayera durante el CyberDay, además de reducir el gasto en servidores.",
  },
  {
    id: 2,
    cliente: "Clínica de salud",
    resumen: "Mejoramos la seguridad de sus sistemas.",
    detalle:
      "La clínica había sufrido un intento de ataque informático. Implementamos autenticación en dos pasos y monitoreo constante, y desde entonces no han tenido problemas de seguridad.",
  },
  {
    id: 3,
    cliente: "Empresa de transporte",
    resumen: "Creamos un sistema para organizar sus rutas de entrega.",
    detalle:
      "La empresa organizaba sus rutas en planillas de Excel, lo que generaba atrasos. Desarrollamos un sistema simple para planificar las rutas y ahora las entregas son más rápidas.",
  },
];

function CaseStudies() {
  const [casoActivo, setCasoActivo] = useState(casos[0]);

  return (
    <section id="casos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Casos de éxito</h2>

        <div className="row">
          {casos.map((caso) => (
            <div className="col-md-4 mb-4" key={caso.id}>
              <div className="card h-100">
                {/* Espacio para poner una imagen del caso/cliente */}
                <div className="img-placeholder">Imagen: {caso.cliente}</div>
                <div className="card-body">
                  <h5 className="card-title">{caso.cliente}</h5>
                  <p className="card-text">{caso.resumen}</p>
                  <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCaso"
                    onClick={() => setCasoActivo(caso)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Un solo modal que muestra la info del caso que se haya elegido */}
      <div className="modal fade" id="modalCaso" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{casoActivo.cliente}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>{casoActivo.detalle}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
