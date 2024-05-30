import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import AdminGuard from "../../services/guard/AdminGuard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons"
import { useOrder } from "../../context/OrderContext";
import Modal from "../modal/Modal";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //cerrar modal
  function handleClose() {
    setIsOpen(false)
  }
  //abrir modal
  function handleShow() {
    setIsOpen(true)
  }

  const isAdmin = true;

  const { toggleSidebarOrder, count } = useOrder();

  return (
    <>
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
            <button className="nav-item" onClick={handleShow}>Login</button>
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

    <Modal title="Ingresar" isOpen={isOpen} handleClose={handleClose}>
      <>
      <h3>Elemento Children</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, laborum.</p>
      <h3>otro titulo</h3>
      </>
    </Modal>
    </>

  
  )
}
