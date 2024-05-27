import "./Services.css";
import { faCreditCard, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

FontAwesomeIcon

export default function Services() {
  return (
    <div className="services-container">
      <div className="services">
        <FontAwesomeIcon className="icon" icon={faTruck} />
        <div className="services-detalle">
          <h5>Envios</h5>
          <p>Realizamos envios a todo el pais. Consulte consto de envio</p>
        </div>
      </div>
      <div className="services">
        <FontAwesomeIcon className="icon" icon={faCreditCard} />
        <div className="services-detalle">
          <h5>Pagos con tarjeta</h5>
          <p>Paga con tarjeta de debito o credito, cuotas sin interes.</p>
        </div>
      </div>
      <div className="services">
        <FontAwesomeIcon className="icon" icon={faShieldHalved} />
        <div className="services-detalle">
          <h5>Pago seguro</h5>
          <p>Paga de forma segura desde nuestra pagina</p>
        </div>
      </div>
    </div>
  )
}
