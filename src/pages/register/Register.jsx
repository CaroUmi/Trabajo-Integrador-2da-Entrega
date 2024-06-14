import Banner from "../../components/banner/Banner";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const URL = `https://6646c83f51e227f23aafcf89.mockapi.io`;

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  function onSubmit(data) { 
    data.bornDate = new Date(data.bornDate).getTime();

    if((data.password) !== (data.passwordRepeat)) {
      Swal.fire("Error", "Las contraseñas no coinciden", "warning");
      return
    } 
    createUser(data);
  }

  //FUNCION PARA INSERTAR usuario
  async function createUser(user) {
    try {
      await axios.post(`${URL}/users`, user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario creado",
        showConfirmButton: false,
        timer: 1100
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear el usuario',
      })
    }
  }

  return (
    <>
      <Banner titlePage="Registro de usuario" page="Registro de usuario" classImg="banner-register" />
      <div className="page-container main-register">
        <div className="admin-form">
          <form onSubmit={handleSubmit(onSubmit)} className="form-register">
            <h2>Registro de usuario</h2>
            <div className="input-group">
              <label htmlFor="fullname">Nombre del usuario</label>
              <input id="fullname" type="text" {...register("fullname", { required: true, minLength: 3, maxLength: 100 })} />
              {errors.fullname?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {(errors.fullname?.type == "minLength" || errors.fullname?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...register("email", { required: true, minLength: 3, maxLength: 100 })} />
              {errors.email?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {(errors.email?.type == "minLength" || errors.email?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="url">URL de imagen</label>
              <input id="url" type="URL" {...register("image", { required: true, minLength: 5 })} />
              {errors.url?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="bornDate">Fecha de nacimiento</label>
              <input id="bornDate" type="date" {...register("bornDate")} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input id="password" type="password" {...register("password", { required: true, minLength: 5, maxLength: 15 })} />
              {errors.password?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {(errors.password?.type == "minLength" || errors.password?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="passwordRepeat">Repetir Contraseña</label>
              <input id="passwordRepeat" type="password" {...register("passwordRepeat", { required: true, minLength: 5, maxLength: 15 })} />
              {errors.passwordRepeat?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {(errors.passwordRepeat?.type == "minLength" || errors.passwordRepeat?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="location">Dirección</label>
              <input id="location" type="text" {...register("location", { minLength: 3, maxLength: 150 })} />
              {(errors.location?.type == "minLength" || errors.location?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="role">Categoría</label>
              <select id="role" {...register("role")}>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="autor" selected>Autor</option>
              </select>
            </div>
            <button className="btn-principal" type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </>
  )
}
