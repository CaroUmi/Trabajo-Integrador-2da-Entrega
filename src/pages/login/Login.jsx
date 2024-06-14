import "./Login.css";
import Banner from "../../components/banner/Banner";

export default function Login() {
  return (
    <>
      <Banner titlePage="Login" page="Login" classImg="banner-login" />

      <div className="page-container main-login centrar">
        <form className="form-login">
          <h1>Ingresar</h1>
          <div className="input-group">
            <label>Correo electrónico</label>
            <input
              name="email"
              required
              type="text"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              name="password"
              required
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="form-btn btn-principal">
            Login
          </button>
        </form>
      </div>
    </>
  );
}