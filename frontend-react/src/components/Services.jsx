const servicios = [
  {
    id: 1,
    titulo: "Migración a la nube",
    texto:
      "Ayudamos a mover los sistemas de tu empresa a la nube (AWS, Azure, etc) de forma segura.",
  },
  {
    id: 2,
    titulo: "Ciberseguridad",
    texto:
      "Protegemos la información de tu empresa con monitoreo y buenas prácticas de seguridad.",
  },
  {
    id: 3,
    titulo: "Desarrollo de software a medida",
    texto:
      "Creamos aplicaciones y sistemas según las necesidades de tu negocio.",
  },
  {
    id: 4,
    titulo: "Soporte técnico",
    texto:
      "Damos soporte a redes, servidores y equipos de tu empresa cuando lo necesites.",
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nuestros servicios</h2>

        <div className="accordion" id="accordionServicios">
          {servicios.map((servicio, index) => (
            <div className="accordion-item" key={servicio.id}>
              <h2 className="accordion-header">
                <button
                  className={
                    index === 0
                      ? "accordion-button"
                      : "accordion-button collapsed"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#servicio" + servicio.id}
                >
                  {servicio.titulo}
                </button>
              </h2>
              <div
                id={"servicio" + servicio.id}
                className={
                  index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"
                }
                data-bs-parent="#accordionServicios"
              >
                <div className="accordion-body">{servicio.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
