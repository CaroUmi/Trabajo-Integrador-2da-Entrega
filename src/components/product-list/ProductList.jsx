import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import axios from "axios";
import "./ProductList.css";

const URL = "https://6646c83f51e227f23aafcf89.mockapi.io/"

export default function ProductList() {
  //Generar un estado para nuestros productos
  const [products, setProducts] = useState([])
  //UseEfect para hacer una peticion controlada
  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      const response = await axios.get(`${URL}/products`);
      const productsAPI = response.data;
      setProducts(productsAPI)
      console.log(productsAPI)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>LISTA DE PRODUCTOS</h2>

      <div className="card-container">
        {
          products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        }
      </div>

    </div>
  )
}
