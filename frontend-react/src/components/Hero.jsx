import { Link } from 'react-router-dom'

function Hero() {
  return (
    <header id="inicio" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3">
              Soluciones de TI para tu empresa
            </h1>
            <p className="mb-4">
              En TechSolve ayudamos a las empresas a mejorar su tecnología:
              migración a la nube, ciberseguridad, desarrollo de software
              a medida y soporte técnico.
            </p>
            <Link to="/solicitudes/nueva" className="btn btn-primary btn-lg">
              Solicitar consultoría
            </Link>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            {/* Espacio para poner una imagen del tema (equipo trabajando, oficina, etc) */}
            <div className="img-placeholder">
              Imagen: equipo de TI trabajando
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
