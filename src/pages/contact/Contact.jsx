import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import Banner from "../../components/banner/Banner";

export default function Contact() {
    return (
        <>
        <Banner titlePage="Contacto" page="Contacto" classImg="banner-contact" />

        <section className="container main-contact">
            <div className="form-contact">
                <div className="data-contact">
                    <h2 className="title-main">Detalles de contacto</h2>
                    <p><FontAwesomeIcon className="icon-contact" icon={faLocationDot} /> San Martín 658, Quilmes.</p>
                    <p><FontAwesomeIcon className="icon-contact" icon={faPhone} /> +54 9 11 6277 1599</p>
                    <p><FontAwesomeIcon className="icon-contact" icon={faEnvelope} /> muebles@hola.com</p>
                </div>
                <div className="form-contact">
                    <h2 className="title-main">Envia tu consulta</h2>
                    <form action="" className="form-contact">
                        <div className="input-group">
                            <label htmlFor="fullname">Nombre completo</label>
                            <input type="text" name="nombreCompleto" id="fullname" minLength="5" maxLength="160"
                                placeholder="John Doe" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="correo">Correo Electronico</label>
                            <input type="email" name="correo" id="correo" maxLength="160" placeholder="correo@hola.com"
                                required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="message" id="message" cols="30" rows="5">Déjanos tu consulta</textarea>
                        </div>
                        <div className="input-group">
                            <button className="form-btn btn-principal" type="submit">Registar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="map-contact">
                <h2 className="title-main">Ubicación</h2>
                <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11821.321449440153!2d-58.261641809579494!3d-34.72676044699484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e6bac9ba17b%3A0x702ea30c054ba56!2sQuilmes!5e0!3m2!1ses-419!2sar!4v1707778624904!5m2!1ses-419!2sar"
                width="100%" height="500" allowfullscreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Google maps"></iframe>
            </div>
        </section>
        </>

    )
}
