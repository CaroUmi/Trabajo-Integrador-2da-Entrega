import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOrder } from "../../context/OrderContext";
import "./OrderSidebar.css";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function OrderSidebar() {
	const { order, total, handleChangeQuantity, removeItem, sidebarToggle, count } = useOrder();

	return (
		<div className={`order-wrapper ${ sidebarToggle ? 'active' : "" }`}>
			<div className="list-container">
				<h2>Orden actual:</h2>
				<ul className="order-list">
					{
						order.map((product) => {
							return (
								<li className="order-item" key={product.id}>
									<img className="order-image" src={product.img} alt="" />
									<div className="order-item-name" title={product.name} >
									{product.name}
									</div>
									<div className="order-quantity order-quantity-input">
										<input type="number" value={product.quantity} onChange={(evt) => handleChangeQuantity(product.id, evt.target.valueAsNumber)} min={1} />
									</div>
									<div className="order-price">
										$ {product.price}
									</div>
									<div className="order-subtotal">
										$ {product.price * product.quantity}
									</div>
									<div className="order-action">
										<FontAwesomeIcon icon={faTrashCan} title="Eliminar producto" onClick={() => removeItem(product.id)} />
									</div>
								</li>
							);
						})
					}
				</ul>

			</div>
			<div className="order-finish">
				<div className="total">
					<div className="total-count">Items: {count}</div>
					<div className="total-price">
						Total $ <span>{ total }</span>
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
