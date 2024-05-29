import Banner from "../../components/banner/Banner";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = `https://6646c83f51e227f23aafcf89.mockapi.io`;

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [])


  async function getProductById() {
    try {
      const response = await axios.get(`${URL}/products/${id}`)
      setProduct(response.data);
      setLoading(false);
      console.log(product?.name)

    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <>
      <h1>cargando...</h1>        
      </>
    );
    
  }
  return (
    <>
    <Banner titlePage="Producto" page="Producto" classImg="banner-single-product" />
        <section className="main-container container-product">
          <article className="main-single-product">
            <img className="img-product" src={product.image} alt={`imagene de ${product.name}`} />
            <div className="single-detalle">
              <div className="single-name">
                <h3 className="name-sproduct">{product.name}</h3>
                <div className="start">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <p className="price">$ {product.price}</p>
              <p className="detalle-sprodut">{product.description}</p>
              <div className="select-color">
                <h5>Color</h5>
                <ul>
                  <li><span className="color color-1"></span></li>
                  <li><span className="color color-2"></span></li>
                  <li><span className="color color-3"></span></li>
                  <li><span className="color color-4"></span></li>
                  <li><span className="color color-5"></span></li>
                </ul>
              </div>
              <div className="footer-sporduct">
                <div className="footer-acction">
                  <a href=""><i className="fa-solid fa-minus"></i></a>
                  <a href="">01</a>
                  <a href=""><i className="fa-solid fa-plus"></i></a>
                </div>
                <button className="btn-principal">Agregar al carrito</button>
              </div>
              <div className="galery-product">
                <img src="/assets/images/products/mesa-akira.jpg" alt="imagen de mesa Akira" />
                <img src="/assets/images/products/mesa-akira-2.jpg" alt="imagen de mesa Akira con adornos" />
                <img src="/assets/images/products/mesa-akira-3.jpg" alt="imagen de mesa Akira de cerca" />
                <img src="/assets/images/products/mesa-akira-4.jpg" alt="imagen de mesa Akira con sillas" />
              </div>
            </div>
          </article>
          <article className="detalle-product">
            <h4>Detalle de producto</h4>
            <p>Imagínese una mesa redonda que fusiona la funcionalidad con el arte, creando un impacto visual único en
              cualquier sala de estar. Esta obra maestra está meticulosamente elaborada en madera de alta calidad, con
              una paleta de tonalidades que van desde cálidos marrones hasta suaves tonos avellana, aportando calidez
              y elegancia a su entorno. Su diseño original destaca por la combinación de diferentes tamaños y alturas,
              creando una armonía visual que invita a la conversación y la conexión.</p>
            <p>Las patas esculpidas de manera experta proporcionan estabilidad sin comprometer la estética, mientras que
              la superficie redonda ofrece un amplio espacio para compartir momentos memorables con amigos y
              familiares. Este mobiliario se convierte en una pieza central que habla por sí misma, incorporando
              detalles únicos que revelan la artesanía y la atención al detalle. Ideal para crear un ambiente acogedor
              en cualquier sala de estar, esta mesa redonda representa la fusión perfecta entre funcionalidad y
              diseño, elevando el espacio a nuevas alturas de sofisticación y estilo.</p>
          </article>
        </section >
    </>
  )
}
