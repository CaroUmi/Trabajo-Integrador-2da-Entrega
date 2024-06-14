import { createContext, useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(0);

  const [sidebarToggle, setSideberToggle] = useState(false);

  useEffect(() => {
    calularTotal();
    calculateCount();
  }, [order])

  const [total, setTotal] = useState(0)

  //funcion agregar producto
  function addOrderItem(producto) {

    const product = order.find(prod => prod.id === producto.id);

    if (product) {
      handleChangeQuantity(product.id, product.quantity + 1)
    } else {
      producto.quantity = 1;
      setOrder([...order, producto]);
    }
  }

  //CalcularTotal
  function calularTotal() {
    let totalCount = 0;

    order.forEach(prod => {
      totalCount += prod.price * prod.quantity
    });
    setTotal(totalCount);
  }

  //Calcula cantidad de productos en el carrito
  function calculateCount() {
    let count = 0;
    order.forEach((prod) => count += prod.quantity);
    setCount(count);
  }

  //funcion que maneja las cantidades de productos de order
  function handleChangeQuantity(id, quantity) {
    const updateOrder = order.map(item => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item
    })
    setOrder(updateOrder);
  }

  //funicon para quitar producto de mi order
  function removeItem(id) {
    Swal.fire({
      title: "Quitar producto",
      text: "Desea quitar el producto del carrito?",
      icon: "error",
      showConfirmButton: true,
      showCancelButton: true,      
      confirmButtonText: "Quitar",
      reverseButtons: true,
    }).then((result) => {
      if(result.isConfirmed) {
      const updOrder = order.filter((prod) => prod.id !== id);
      setOrder(updOrder);
    }
    })
  }

  function toggleSidebarOrder() {
    setSideberToggle(!sidebarToggle);
  }

  return (
    < OrderContext.Provider
      value={{
        order, total, sidebarToggle, count,
        addOrderItem, handleChangeQuantity,
        removeItem, toggleSidebarOrder
      }}>
      {children}
    </OrderContext.Provider >
  )
}
