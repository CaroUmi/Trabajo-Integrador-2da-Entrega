import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <div className="card">
        Producto 1
        <NavLink to="/product-detail/1" >
          ver más...
          </NavLink>
      </div>
      <div className="card">
        Producto 2
        <NavLink to="/product-detail/2" >
          ver más...
          </NavLink>
      </div>
      <div className="card">
        Producto 3
        <NavLink to="/product-detail/3" >
          ver más...
          </NavLink>
      </div>
    </>
  );
}