import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Carousel.css";

export default function Carousel() {
  return (
    <>
    <div id="carousel-banner" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to="0" className="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://trabajo-integrador-bootcamp.netlify.app/assets/images/slider1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block texto-carousel">
            <h5>Bienvenidos a</h5>
            <h3>ABSTRAKTO</h3>
            <p>mbellece tu hogar con muebles y accesorios de diseño único. Descubre calidad, estilo y confort para cada
              rincón especial.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://trabajo-integrador-bootcamp.netlify.app/assets/images/slider2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block texto-carousel">
            <h5>Muebles</h5>
            <h3>CATALOGO 2024</h3>
            <p>Descubre la esencia de la modernidad y calidad en nuestros muebles exclusivos para esta temporada.
              Transforma tu espacio con estilo incomparable.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://trabajo-integrador-bootcamp.netlify.app/assets/images/slider3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block texto-carousel">
            <h3>Decoración de interiores</h3>
            <p>Transforma tu hogar con nuestro servicio de decoración de interiores, fusionando estilo y funcionalidad
              para crear ambientes únicos y acogedores.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel-banner" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel-banner" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}
