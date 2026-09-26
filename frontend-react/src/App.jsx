import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Timeline from './components/Timeline.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'
import VerSolicitudes from './pages/VerSolicitudes.jsx'
import AgregarSolicitud from './pages/AgregarSolicitud.jsx'
import EditarSolicitud from './pages/EditarSolicitud.jsx'
import EliminarSolicitud from './pages/EliminarSolicitud.jsx'
import './App.css'

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Timeline />
      <CaseStudies />
      <ContactCTA />
    </main>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitudes" element={<VerSolicitudes />} />
        <Route path="/solicitudes/nueva" element={<AgregarSolicitud />} />
        <Route path="/solicitudes/editar/:id" element={<EditarSolicitud />} />
        <Route path="/solicitudes/eliminar/:id" element={<EliminarSolicitud />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App