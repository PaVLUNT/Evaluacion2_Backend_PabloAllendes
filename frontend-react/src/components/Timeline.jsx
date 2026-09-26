const pasos = [
  {
    numero: "1",
    titulo: "Diagnóstico",
    texto: "Revisamos cómo está la tecnología de tu empresa actualmente.",
  },
  {
    numero: "2",
    titulo: "Propuesta",
    texto: "Armamos un plan con lo que se necesita mejorar.",
  },
  {
    numero: "3",
    titulo: "Implementación",
    texto: "Ponemos en marcha las soluciones acordadas con el cliente.",
  },
  {
    numero: "4",
    titulo: "Soporte",
    texto: "Seguimos apoyando a la empresa después de terminado el proyecto.",
  },
];

function Timeline() {
  return (
    <section id="proceso" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Cómo trabajamos</h2>

        <div className="row text-center">
          {pasos.map((paso) => (
            <div className="col-md-3 mb-4" key={paso.numero}>
              <div className="paso-numero mb-2">{paso.numero}</div>
              <h5>{paso.titulo}</h5>
              <p>{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
