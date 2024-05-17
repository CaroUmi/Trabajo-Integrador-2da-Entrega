// import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  console.log(id);

  // useEffect(() => {
  //   getProduct()
  // }, [])

  // async function getProduct() {
  //   try {
  //     const response = await axios.get(`ÙRL/products/${id}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <h1>ProductDetail</h1>
    </>
  );
}
