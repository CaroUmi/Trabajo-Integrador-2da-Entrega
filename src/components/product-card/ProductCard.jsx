import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faMagnifyingGlass, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";


export default function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card-main">
        <a href="/pages/single-product.html" target="_blank">
          <img className="card-img" src={product.image} target="_blank" alt={product.name} />
        </a>
        <div className="card-action">
          <a href="#" className="icon-product">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="/pages/single-product.html" target="_blank" className=" icon-product ico-central">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <a href="/pages/single-product.html" target="_blank" className="icon-product icon-product">
            <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
      </div>
      <div className="card-info">
        <div className="product-info">
          <a href="pages/single-product.html" target="_blank">
            <p className="name-product">{product.name}</p>
          </a>
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