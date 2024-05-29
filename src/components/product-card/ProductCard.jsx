import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faMagnifyingGlass, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../context/OrderContext";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {

  const { addOrderItem } = useOrder();

  return (
    <article className="card">
      <div className="card-main">
        <Link to={`/product-detail/${product.id}`}>
          <img className="card-img" src={product.image} target="_blank" alt={product.name} />
        </Link>
        <div className="card-action">
          <a href="#" className="icon-product">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <Link to={`/product-detail/${product.id}`} className=" icon-product ico-central">
            <FontAwesomeIcon icon={faMagnifyingGlass} title="Ver detalle" />
          </Link>
          <a onClick={() => addOrderItem(product)} target="_blank" className="icon-product icon-product">
            <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
      </div>
      <div className="card-info">
        <div className="product-info">
          <Link to={`/product-detail/${product.id}`}>
            <p className="name-product">{product.name}</p>
          </Link>
          <div className="start">

            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="product-info">
          <p className="price-product">$ {product.price}</p>
          <div className="data">
            <a href="#">
              <p className="category-product">{product.category}</p>
            </a>
            <p className="fecha">{product.createdAt}</p>
          </div>
        </div>
      </div>
    </article>
  )
}