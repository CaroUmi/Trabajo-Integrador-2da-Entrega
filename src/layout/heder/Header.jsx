import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import AdminGuard from "../../services/guard/AdminGuard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons"
import { useOrder } from "../../context/OrderContext";

export default function Header() {
  const isAdmin = true;

  const { toggleSidebarOrder, count } = useOrder();

  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="container-nav">
          <Link to="/">
            <img className="logo" src="https://trabajo-integrador-bootcamp.netlify.app/assets/images/logos/logo-color.png" alt="logo de marca" />
          </Link>
          <label className="icon-burger" htmlFor="check-menu">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <input className="nav-checkbox" type="checkbox" id="check-menu" />
          <ul className="nav-list">

            <NavLink to="/" className="nav-item">Principal</NavLink>
            <NavLink to="/login" className="nav-item">Login</NavLink>
            <NavLink to="/contact" className="nav-item">Contacto</NavLink>
            <NavLink to="/about-us" className="nav-item">Acerca de</NavLink>
            <NavLink to="/regiter" className="nav-item">Registro</NavLink>
            {
              isAdmin && (
                <AdminGuard>
                  <NavLink to="/admin-product" className="nav-item">Admin Product</NavLink>
                  <NavLink to="/admin-users" className="nav-item">Admin Users</NavLink>
                </AdminGuard>
              )
            }
            <div className="user-data">
              <img className="user-img" src="https://trabajo-integrador-bootcamp.netlify.app/assets/images/profile.png" alt="imagen del usuario" />
              <p className="user-name">John Doe</p>
            </div>
          </ul>
        </div>
        {/* </div> */}
        <div className="nav-cart section-header">
          <div className={`user-cart-container ${ count < 1 ? "" : 'show-circle'}`} data-count={count} >
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} onClick={() => toggleSidebarOrder()} />
          </div>          
        </div>
      </nav>
    </header>
  )
}
