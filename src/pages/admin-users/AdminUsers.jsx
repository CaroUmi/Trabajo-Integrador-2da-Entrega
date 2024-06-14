import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { formatTimestampToInputDate } from "../../services/utils/formatDates";
import Banner from "../../components/banner/Banner";
import Swal from "sweetalert2";

const URL = `https://6646c83f51e227f23aafcf89.mockapi.io`;


export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm()
  useEffect(() => { getusers(); }, []);

  function onSubmit(data) {
    data.bornDate = new Date(data.bornDate).getTime();

    if (data.id) { //si data.id existe es que estoy editando
      updateUserData(data);
    } else {

      if((data.password) !== (data.passwordRepeat)) {
        Swal.fire("Error", "Las contraseñas no coinciden", "warning");
        return
      } 

      createUser(data);
    }
  }

  //FUNCTION QUE GUARDA DATO AL EDITARLO
  function updateUserData(user) {
    try {
      Swal.fire({
        title: "Desea editar el usuario?",
        showCancelButton: true,
        confirmButtonText: "Editar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.put(`${URL}/users/${user.id}`, user)
          getusers();
          setIsEditing(false);
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario editado",
            showConfirmButton: false,
            timer: 1100
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al editar el usuario',
      })
    }
  }

  //RENDERIZAR userOS
  async function getusers() {
    try {
      const response = await axios.get(`${URL}/users`)
      const users = response.data;
      setUsers(users);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al editar el usuario',
      })
    }
  }

  //FUNCION PARA INSERTAR usuario
  async function createUser(user) {
    try {
      const response = await axios.post(`${URL}/users`, user);
      getusers();
      reset();
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

  //FUNCION PARA DELETE DE userO
  async function deleteUser(id) {
    try {
      Swal.fire({
        title: "Desea eliminar el usuario?",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${URL}/users/${id}`);
          getusers();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario eliminado",
            showConfirmButton: false,
            timer: 1100
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al eliminar el usuario',
      })
    }
  }

  //FUNCION UPDATE user (EDITAR)
  function handleEditUser(user) {
    setValue("id", user.id);
    setValue("fullname", user.fullname);
    setValue("email", user.email)
    setValue("image", user.image);
    setValue("bornDate", formatTimestampToInputDate(user.bornDate));
    setValue("password", user.password);
    setValue("location", user.location);
    setValue("role", user.role);

    setIsEditing(true);

  }

  return (
    <>
      <Banner titlePage="Lista de Usuarios" page="Lista de Usuarios" classImg="banner-admin-user" />

      <div className="page-container main-admin">
        <div className="admin-form">
          <form onSubmit={handleSubmit(onSubmit)} className="form-contact">
            <h2>{isEditing ? 'Actualizacion de usuario' : 'Alta de usuario'}</h2>
            <input type="hidden" {...register("id")} />
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
            <button className="btn-principal" type="submit">{isEditing ? 'Actualizar' : 'Crear'}</button>
          </form>
        </div>
        <div className="main-admin-product">
          <h2>Listado de usuario</h2>
          <div className="table-container">
            <table className="tb-product">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Mail</th>
                  <th>Fecha nac.</th>
                  <th>Dirección</th>
                  <th>Rol</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="td-image">
                      <img src={user.image} alt={`imagen de ${user.fullname}`} className="img-table" />
                    </td>
                    <td className="td-user">{user.fullname}</td>
                    <td className="td-description">{user.email}</td>
                    <td>{formatTimestampToInputDate(user.bornDate)}</td>
                    <td className="td-price">{user.location}</td>
                    <td className="td-rol">{user.role}</td>
                    <td className="td-action">
                      <button className="bt-edit" onClick={() => handleEditUser(user)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button className="bt-remove" onClick={() => deleteUser(user.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}