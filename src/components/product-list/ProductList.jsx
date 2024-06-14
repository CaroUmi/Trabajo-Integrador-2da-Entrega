import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import axios from "axios";
import "./ProductList.css";
import Swal from "sweetalert2";

const URL = "https://6646c83f51e227f23aafcf89.mockapi.io/"

export default function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      const response = await axios.get(`${URL}/products`);
      const productsAPI = response.data;
      setProducts(productsAPI)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'No se pudo cargar los productos',
      })
    }
  }

  return (
    <div>
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
