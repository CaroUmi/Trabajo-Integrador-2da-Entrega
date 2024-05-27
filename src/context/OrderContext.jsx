import { createContext, useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([
    { id: 100, name: "XBOX", price: 1000, quantity: 1 },
    { id: 222, name: "PS5", price: 2000, quantity: 3 },
    { id: 333, name: "Nintendo Switch", price: 5000, quantity: 2 },
  ]);

  const [sidebarToggle, setSideberToggle] = useState(false);

  useEffect(() => {
    calularTotal();
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
        order, total, sidebarToggle,
        addOrderItem, handleChangeQuantity,
        removeItem, toggleSidebarOrder
      }}>
      {children}
    </OrderContext.Provider >
  )
}
