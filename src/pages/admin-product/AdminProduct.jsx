import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { formatTimestampToInputDate } from "../../services/utils/formatDates";
import Banner from "../../components/banner/Banner";
import Swal from "sweetalert2";

const URL = `https://6646c83f51e227f23aafcf89.mockapi.io`;

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm()
  useEffect(() => { getproducts(); }, []);

  function onSubmit(data) {
    data.createdAt = new Date(data.createdAt).getTime();
    data.price = +data.price;

    if (data.id) {
      updateProductData(data);
    } else {
      createProduct(data);
    }
  }

  //FUNCTION QUE GUARDA DATO AL EDITARLO
  function updateProductData(product) {
    try {
      Swal.fire({
        title: "Desea editar el producto?",
        showCancelButton: true,
        confirmButtonText: "Editar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.put(`${URL}/products/${product.id}`, product)
          getproducts();
          setIsEditing(false);
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto editado",
            showConfirmButton: false,
            timer: 1100
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al editar el producto',
      })
    }
  }

  //RENDERIZAR PRODUCTOS
  async function getproducts() {
    try {
      const response = await axios.get(`${URL}/products`)
      const products = response.data;
      setProducts(products);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al editar el producto',
      })
    }
  }

  //FUNCION PARA INSERTAR PRODUCTO
  async function createProduct(product) {
    try {
      await axios.post(`${URL}/products`, product);
      getproducts();
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto creado",
        showConfirmButton: false,
        timer: 1100
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear el producto',
      })
    }
  }

  //FUNCION PARA DELETE DE PRODUCTO
  async function deleteProduct(id) {
    try {
      Swal.fire({
        title: "Desea eliminar el producto?",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${URL}/products/${id}`);
          getproducts();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto eliminado",
            showConfirmButton: false,
            timer: 1100
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al eliminar el producto',
      })
    }
  }

  //FUNCION UPDATE PRODUCT (EDITAR)
  function handleEditProduct(product) {
    setValue("id", product.id);
    setValue("image", product.image);
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("createdAt", formatTimestampToInputDate(product.createdAt));
    setValue("price", product.price);

    setIsEditing(true);
  }

  return (
    <>
      <Banner titlePage="Lista de Productos" page="Lista de Productos" classImg="banner-list-products" />

      <div className="page-container main-admin">
        <div className="admin-form">
          <form onSubmit={handleSubmit(onSubmit)} className="form-contact">
            <h2>{isEditing ? 'Actualizacion de producto' : 'Alta de producto'}</h2>
            <input type="hidden" {...register("id")} />
            <div className="input-group">
              <label htmlFor="name">Nombre del producto</label>
              <input id="name" type="text" {...register("name", { required: true, minLength: 3, maxLength: 100 })} />
              {errors.name?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {(errors.name?.type == "minLength" || errors.name?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="price">Precio</label>
              <input id="price" type="number" {...register("price", { required: true, min: 1 })} />
              {errors.price?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {errors.price?.type == "min" && (<span className="input-error">El valor debe ser mayor a 0</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="url">URL de imagen</label>
              <input id="url" type="URL" {...register("image", { required: true, minLength: 5 })} />
              {errors.url?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
              {errors.url?.type == "minLength" && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="categoria">Categoría</label>
              <select id="categoria" {...register("category", { required: true })}>
                <option value="muebles">Muebles</option>
                <option value="decoracion">Deboración</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="descripcion">Descripción</label>
              <textarea id="descripcion" type="text" rows={5} {...register("description", { required: true })} />
              {errors.descripcion?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
            </div>
            <div className="input-group">
              <label htmlFor="createdAt">Fecha de ingreso</label>
              <input id="createdAt" type="date" {...register("createdAt")} />
            </div>
            <button className="btn-principal" type="submit">{isEditing ? 'Actualizar' : 'Crear'}</button>
          </form>
        </div>
        <div className="main-admin-product">
          <h2>Listado de productos</h2>
          <div className="table-container">
            <table className="tb-product">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Fecha de Ingreso</th>
                  <th>Precio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="td-image">
                      <img src={product.image} alt={`imagen de ${product.name}`} className="img-table" />
                    </td>
                    <td className="td-product">{product.name}</td>
                    <td className="td-description">{product.description}</td>
                    <td>{formatTimestampToInputDate(product.createdAt)}</td>
                    <td className="td-price">$ {product.price}</td>
                    <td className="td-action">
                      <button className="bt-edit" onClick={() => handleEditProduct(product)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button className="bt-remove" onClick={() => deleteProduct(product.id)}>
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