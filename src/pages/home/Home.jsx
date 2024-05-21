import ProductList from "../../components/product-list/ProductList";
import { useOrder } from "../../context/OrderContext";

export default function Home() {

  const { order } = useOrder()
  console.log(order)

  return (
    <>
    <main className="main-container">
      <h1>Home</h1>

      <ProductList />
      </main>
    </>
  );
}