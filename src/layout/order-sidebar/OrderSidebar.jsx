import "./OrderSidebar.css";

export default function OrderSidebar() {
  return (
    <div className="order-wrapper active">
            <div className="list-container">
                <h2>Orden actual:</h2>
            </div>

            <div className="order-finish">
                <div className="total">
                    <div className="total-count">Items: 20</div>
                    <div className="total-price">
                        Total $ <span>100000</span>
                    </div>
                </div>
                <div className="order-purchase">
                    {/* <a onClick={() => clearCart()}>Limpiar carrito</a>
                    <button className="btn" onClick={() => finishOrder()}>
                        Comprar
                    </button> */}
                </div>
            </div>
        </div>

  )
}
