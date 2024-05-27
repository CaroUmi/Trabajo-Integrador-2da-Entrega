import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="main-footer">
    <div className="footer">
      <section className="footer-section">
        <div className="footer-contact">
          <div className="redes">
            <h3 className="footer-tittle">Seguinos en:</h3>
            <a href="https://www.instagram.com/"><FontAwesomeIcon className="icon-redes" icon={faInstagram} /></a>
            <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-redes" icon={faFacebook} /></a>
            <a href="https://ar.linkedin.com/"><FontAwesomeIcon className="icon-redes" icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="footer-contact">
          <h3 className="footer-tittle">Contactanos</h3>
          <p><FontAwesomeIcon className="icon-contact" icon={faLocationDot} /> San Martín 658, Quilmes.</p>
          <p><FontAwesomeIcon className="icon-contact" icon={faPhone} /> +54 9 11 6277 1599</p>
          <p><FontAwesomeIcon className="icon-contact" icon={faEnvelope} /> muebles@hola.com</p>
        </div>
      </section>
      <section className="footer-section">
        <img className="logo-footer" src="https://trabajo-integrador-bootcamp.netlify.app/assets/images/logos/logo-color.png" alt="" />
        <h3 className="footer-tittle">Menu</h3>
        <div className="footer-menu">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="pages/about.html" target="_blank">Nosotros</a></li>
            <li><a href="pages/registro" target="_blank">Registro</a></li>
            <li><a href="pages/contact.html" target="_blank">Contacto</a></li>
            <li><a href="pages/list-products.html" target="_blank">Productos</a></li>
          </ul>
        </div>
      </section>
      <section className="footer-section">
        <h3 className="footer-tittle">Newsletters</h3>
        <p>Suscribete a nuestro newsletters para recibir las mejores promociones</p>
        <div className="form-news">
          <form action="#">
            <input type="email" name="correo" placeholder="Correo electronico" />
            <button className="btn-principal">Suscribirme</button>
          </form>
        </div>
      </section>
    </div>
  </footer>
  )
}
