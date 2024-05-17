import { NavLink } from "react-router-dom";

import "./Header.css";
import AdminGuard from "../../services/guard/AdminGuard";

export default function Header() {
  const isAdmin = true;

  return (
    <header>
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">Principal</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/contact" className="nav-link">Contacto</NavLink>
        <NavLink to="/about-us" className="nav-link">Acerca de</NavLink>
        <NavLink to="/regiter" className="nav-link">Registro</NavLink>
        {
          isAdmin && (
            <AdminGuard>
            <NavLink to="/admin-product" className="nav-link">Admin Product</NavLink>
            <NavLink to="/admin-users" className="nav-link">Admin Users</NavLink>
            </AdminGuard>
          )
        }

      </nav>
    </header>
  )
}
