import Banner from "../../components/banner/Banner";
import StaffCard from "../../components/staff-card/StaffCard";
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <>
      <Banner titlePage="Sobre Nosotros" page="Nosotros" classImg="banner-about" />
      <section className="page-container container-about">
        <section className="main-about">
          <img className="img-about" src="https://i.postimg.cc/kMfVGChz/about.jpg" alt="imagen de decoración" />
          <div className="text-about">
            <h2>Sobre Nosotros</h2>
            <p>Hace décadas, nació nuestra empresa con la visión de transformar hogares en espacios únicos y
              acogedores. Comenzamos como una pequeña tienda de muebles con la misión de ofrecer calidad y estilo
              a precios accesibles. Con el tiempo, evolucionamos y expandimos nuestro catálogo, incorporando
              tendencias modernas y diseños atemporales.</p>
            <p>Nos enorgullece ser un destino confiable para aquellos que buscan muebles y accesorios de decoración
              que reflejen su personalidad y estilo de vida. Nuestra dedicación a la excelencia y la atención al
              cliente nos ha llevado a crecer y abrir múltiples ubicaciones, estableciendo nuestra presencia como
              referentes en el sector.</p>
            <p>Colaboramos con artesanos y diseñadores talentosos para crear piezas únicas que destacan por su
              calidad artesanal y estética. Además, nos esforzamos por ser sostenibles, utilizando materiales
              ecológicos siempre que es posible.</p>
            <p>A lo largo de los años, hemos construido relaciones sólidas con nuestros clientes, quienes confían en
              nosotros para embellecer sus hogares. Cada compra es más que un simple mueble; es una inversión en
              la creación de espacios que inspiran y mejoran la vida diaria. Seguimos innovando, creciendo y
              compartiendo la pasión por la decoración en cada rincón del hogar.</p>
          </div>
        </section>
        <section className="container-staff">
          <h2 className="title-staff">Nuestro Staff</h2>

          <StaffCard />

        </section>
        <section className="main-informe">
          <article className="informe">
            <h2>Informe del Proyecto</h2>
            <h4>Ecommerce</h4>
            <p>Empresa especializada en la venta de muebles y accesorios de decoración con diseño exclusivo.</p>
            <h4>Diseño</h4>
            <p>El diseño del sitio web sigue un enfoque minimalista, destacando por su simplicidad y claridad. Una
              paleta de colores limitada aporta una apariencia limpia y moderna, mientras que las fuentes legibles
              mejoran la experiencia de lectura y comprensión del contenido. La navegación se simplifica mediante
              opciones claras que facilitan la orientación del usuario. La cuidadosa selección de imágenes y
              gráficos aporta elegancia al conjunto, asegurando un equilibrio delicado en la presentación visual
              del sitio.</p>
            <h4>Estructura del Sitio</h4>
            <ol>
              <li>Página Principal: Se incorporó un carousel que presenta tres imágenes destacadas, capturando la
                atención del usuario. Además, se incluyó una sección con cards de productos con datos
                relevantes, proporcionando una vista rápida de las ofertas de productos.</li>
              <li>Página Registro: Incorporación de un formulario de registro de usuario con campos requeridos y
                utilizando los diferentes tipos de validación, asegurando un proceso de registro exitoso y
                eficiente. Garantizando la experiencia del usuario y la seguridad de sus datos durante el
                registro.</li>
              <li>Página de Contacto: La página de contacto ofrece un formulario simplificado que facilita el
                envío de informacion del usuario, junto con un área dedicada para dejar comentarios. Además,
                incluye un mapa que muestra de manera clara la ubicación exacta de nuestro local de venta,
                brindando una experiencia de usuario más intuitiva y completa.</li>
              <li>Página Acerca de Nosotros: Esta sección se distingue por su diseño limpio y conciso, ofreciendo
                una visión general detallada de las actividades de la empresa. Se agregó información sobre el
                equipo, destacando la dedicación y experiencia de quienes trabajan para ofrecer productos de
                calidad</li>
              <li>Página Administracion de Productos: Esta página está diseñada facilitar la gestión eficiente de
                los productos Se incorporó una tabla organizada que muestra la imagen del producto, nombre,
                descripción, fecha de ingreso y precio. Se incluyó una columna de edición para facilitar las
                actualizaciones. Este cambio agiliza la gestión de productos para el equipo administrativo.</li>
              <li>Página de Producto Simple: La página detalla de manera exhaustiva cada producto, proporcionando
                su nombre, calificación, precio, colores disponibles, y tanto una breve como una extensa
                descripción. Además, incluye un botón de "Añadir al carrito" para una experiencia de compra más
                completa y conveniente.</li>
            </ol>
            <h4>Resumen</h4>
            <p>El diseño del sitio web de comercio electrónico se ha concebido con la intención de perfeccionar la
              experiencia del usuario, apostando por un enfoque minimalista y funcional en todas las páginas. Este
              diseño busca no solo la navegación intuitiva, sino también la presentación eficiente de la
              información para incrementar la satisfacción del cliente y optimizar la eficiencia operativa. Con un
              menú de navegación limpio y responsive, se garantiza una experiencia óptima en diversos
              dispositivos, priorizando la accesibilidad y comodidad del usuario en cada interacción para una
              experiencia completa.</p>
          </article>
          <article className="main-alumno">
            <div className="alumno">
              <img className="img-alumno" src="https://i.postimg.cc/RhDVRMk0/foto-alumno.jpg" alt="imagen del alumno" />
              <h4 className="name-alumno">Carolina Umisedo</h4>
              <p className="curso-alumno">Cursante del Bootcamp Full Stack</p>
              <p className="curso-alumno">EducacionIT</p>
            </div>
          </article>
        </section>
      </section>

    </>
  )
}
