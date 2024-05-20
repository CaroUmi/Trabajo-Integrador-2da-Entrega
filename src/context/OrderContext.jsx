import { createContext, useContext, useState } from "react"

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([
    { id: 100, name: "XBOX", price: 1000, quantity: 1 },
    { id: 222, name: "PS5", price: 2000, quantity: 3 },
    { id: 333, name: "Nintendo Switch", price: 5000, quantity: 2 },
  ]);

  const [ total, setTotal ] = useState(0)

  //funcion agregar producto
  function addOrderItem(product) {
    product.quantity = 1;
    setOrder([ ...order, product])
    calularTotal();
  }

  //CalcularTotal
  function calularTotal() {
    let totalCount = 0;

    order.forEach(prod => {
      totalCount += prod.price * prod.quantity
    });
    setTotal(totalCount);
  }

  return (
    < OrderContext.Provider value={{ order, total, addOrderItem }}>
    { children }    
    </OrderContext.Provider >
  )
}
