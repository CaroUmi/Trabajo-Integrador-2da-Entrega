import Carousel from "../../components/carousel/Carousel";
import ProductList from "../../components/product-list/ProductList";
import Services from "../../components/services/Services";
import { useOrder } from "../../context/OrderContext";

export default function Home() {

  const { order } = useOrder()

  return (
    <>
      <Carousel />
      <main className="page-container">
        <h2 className="title-main">Productos destacados</h2>

        <ProductList />
      </main>

      <Services />
    </>
  );
}