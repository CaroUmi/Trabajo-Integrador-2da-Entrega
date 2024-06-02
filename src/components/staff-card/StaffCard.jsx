import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./StaffCard.css"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function StaffCard() {

  const staff = [
    { id: 1, name: "Gabriela Fernandez", img: "https://trabajo-integrador-bootcamp.netlify.app/assets/images/staff-1.jpg", puesto: "Diseñadora de interiores", desc: "Soy una diseñadora de interiores apasionada, fusiono estilos con funcionalidad para crear ambientes únicos y acogedores. Transformo sueños en espacios.", instagram: "https://www.instagram.com/", facebook: "https://www.facebook.com/", linkedin: "https://ar.linkedin.com/" },
    { id: 1, name: "Ariel Mazzacane", img: "https://trabajo-integrador-bootcamp.netlify.app/assets/images/staff-2.jpg", puesto: "Asesor de venta", desc: "Soy un asesor de ventas apasionado en muebles y decoración. Mi objetivo es transformar espacios con soluciones estilizadas y funcionales. ¡Bienvenido a la excelencia decorativa!", instagram: "https://www.instagram.com/", facebook: "https://www.facebook.com/", linkedin: "https://ar.linkedin.com/" },
    { id: 1, name: "Claudia Martinez", img: "https://trabajo-integrador-bootcamp.netlify.app/assets/images/staff-3.jpg", puesto: "Asesor de ventas", desc: "Soy asesora de ventas apasionada por la decoración. Brindo atención personalizada para transformar tus espacios con estilo y funcionalidad excepcionales.", instagram: "https://www.instagram.com/", facebook: "https://www.facebook.com/", linkedin: "https://ar.linkedin.com/" }
  ]

  return (
    <div className="staff">
      {staff.map((miembro) => {
        return (
          <div className="miembro" key={miembro.id}>
            <img className="img-miembro" src={miembro.img}
              alt="foto de miembro del staff Gabriela Fernandez " />
            <h3 className="name-miembro">{miembro.name}</h3>
            <p className="puesto-miembro">{miembro.puesto}</p>
            <p className="descripcion-miembro">{miembro.desc}</p>
            <div className="redes">
              <a href={miembro.instagram}><FontAwesomeIcon icon={faInstagram} className="icon-redes" /></a>
              <a href={miembro.facebook}><FontAwesomeIcon icon={faFacebook} className="icon-redes" /></a>
              <a href={miembro.linkedin}><FontAwesomeIcon icon={faLinkedin} className="icon-redes" /></a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
