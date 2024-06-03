export default function Register() {
  return (
    <div className="main-container register-container">
      <form className="form-register">
        <h1>Registro de usuario</h1>
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
        <div className="input-group">
          <label>Repetir Contraseña</label>
          <input
            name="password"
            required
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="form-btn btn-principal">
          Registrar
        </button>
      </form>
    </div>
  )
}
