import "./Login.css";

export default function Login() {
  return (
    <div className="main-container login-container">
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
  );
}