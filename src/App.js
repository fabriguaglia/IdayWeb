import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import DeliLogo from "./logo.png";
import Change from "./change.png";
import bate from "./bate.jpeg";
import check from "./check.png";

function App() {
  // Datos de contacto
  const whatsappNumber = "+5491144956123"; // tu número de whatsapp
  const phoneNumber = "+541144956123"; // tu número de teléfono

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={DeliLogo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2"
            />
            <span className="text-white">Iday Autodelivery</span>
          </a>
        </div>
      </nav>

      {/* HERO RESPONSIVO */}
      <div className="card text-bg-dark border-0">
        <img
          src={Change}
          className="card-img img-fluid hero-img"
          alt="Fondo"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
          <h1 className="fw-bold display-6 display-md-4">Bienvenido a Iday</h1>
          <p className="card-text fs-6 fs-md-5 mb-4">
            Cambiamos la batería de tu auto a domicilio.
          </p>
          <div className="row justify-content-center g-2 w-100">
            <div className="col-6 col-sm-auto d-grid">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success w-100 text-center"
              >
                Whatsapp
              </a>
            </div>
            <div className="col-6 col-sm-auto d-grid">
              <a
                href={`tel:${phoneNumber}`}
                className="btn btn-outline-light w-100 text-center"
              >
                Llamanos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TARJETAS EN GRILLA */}
      <div className="container my-5">
        <div className="row g-3">
          <div className="col-6 col-md-4">
            <div className="card h-100">
              <img src={bate} className="card-img-top card-img-small" alt="Baterías" />
              <div className="card-body">
                <h5 className="card-title">Baterías</h5>
                <p className="card-text">
                  Instalamos baterías a domicilio con garantía oficial.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="card h-100">
              <img src={check} className="card-img-top card-img-small" alt="Auxilio rápido" />
              <div className="card-body">
                <h5 className="card-title">Auxilio rápido</h5>
                <p className="card-text">
                  Servicio de cambio de batería en el momento que lo necesites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAPA CON UBICACIÓN */}
        <div className="container my-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📍Donde trabajamos</h5>
              <p className="card-text">Zona Norte, Buenos Aires, Argentina</p>
              <div style={{ width: "100%", height: "400px" }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=General%20Pacheco+(Iday%20Autodelivery)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
              </div>
            </div>
          </div>
        </div>

      {/* FOOTER */}
      <div className="container"> 
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
          <div className="col-md-4 d-flex align-items-center"> 
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
              <svg className="bi" width="30" height="24" aria-hidden="true">
                <use xlinkHref="#bootstrap"></use>
              </svg> 
            </a> 
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2025 Iday Autodelivery |{' '}
              <a href="tel:+5491144956123" className="text-body-secondary text-decoration-none">
                +54 9 11 4495-6123
              </a>
            </span>
          </div> 
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://www.facebook.com/share/16GaDBgUhV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} color="#424242ff" /></a>
            </li> 
          </ul> 
        </footer> 
      </div>

      {/* ICONO FLOTANTE DE WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp size={32} color="#fff" />
        </a>

        {/* ESTILOS FLotante */}
        <style jsx>{`
          .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px; /* cambiado de left a right */
            background-color: #25d366;
            border-radius: 50%;
            padding: 12px;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .whatsapp-float:hover {
            background-color: #1ebe57;
            text-decoration: none;
          }
        `}</style>

    </>
  );
}

export default App;
