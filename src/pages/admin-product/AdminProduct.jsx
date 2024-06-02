import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { formatTimestampToInputDate } from "../../services/utils/formatDates";
import Banner from "../../components/banner/Banner";
const URL = `https://6646c83f51e227f23aafcf89.mockapi.io`;


export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm()
  useEffect(() => { getproducts(); }, []);

  function onSubmit(data) {
    data.createAt = new Date(data.createAt).getTime();
    data.price = +data.price;

    if(data.id) { //si data.id existe es que estoy editando
      updateProductData(data); 
    } else {
      createProduct(data);
    }    
  }

  //FUNCTION QUE GUARDA DATO AL EDITARLO
  async function updateProductData(product) {
    try {
      await axios.put(`${URL}/products/${product.id}`, product)
      //sweetalert de exito
      getproducts();
      setIsEditing(false);
      reset();
    } catch (error) {
      console.log(error)
    }
  }

  //RENDERIZAR USUARIOS
  async function getproducts() {
    try {
      const response = await axios.get(`${URL}/products`)
      const products = response.data;
      setProducts(products);
    } catch (error) {
      console.log(error)
    }
  }

  //FUNCION PARA INSERTAR PRODUCTO
  async function createProduct(product) {
    try {

      const newProduct = await axios.post(`${URL}/products`, product);
      getproducts();
      reset();
      console.log(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  //FUNCION PARA DELETE DE PRODUCTO
  async function deleteProduct(id) {
    try {
      await axios.delete(`${URL}/products/${id}`);
      //poner sweetalert para confirmar borrado ----------------
      getproducts();
    } catch (error) {
      console.log(error);
      //poner sweetalert para mostrar el error ------------------
    }
  }

  //FUNCION UPDATE PRODUCT (EDITAR)
  function handleEditProduct(product) {
    console.log("Editar producto", product);

    setValue("id", product.id);
    setValue("image", product.image);
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("createAt", formatTimestampToInputDate(product.createAt));
    setValue("price", product.price);

    setIsEditing(true);
  }

  return (
    <div>

    <Banner titlePage="Lista de Productos" page="Lista de Productos" classImg="banner-list-products" />
    <div className="container main-admin">
      <div className="admin-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{isEditing ? 'Actualizacion de producto' : 'Alta de producto' }</h2>
          <input type="hidden" {...register("id")} />
          <div className="input-group">
            <label htmlFor="name">Nombre del producto</label>
            <input id="name" type="text" {...register("name", { required: true, minLength: 3, maxLength: 100 })} />
            {errors.name?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
            {(errors.name?.type == "minLength" || errors.name?.type == "maxLength") && (<span className="input-error">La cantidad de caracteres es invalida</span>)}
          </div>
          <div className="input-group">
            <label htmlFor="price">Precio</label>
            <input id="price" type="number" {...register("price", { require: true, min: 1 })} />
            {errors.name?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
          </div>
          <div className="input-group">
            <label htmlFor="url">URL de imagen</label>
            <input id="url" type="URL" {...register("image", { require: true, minLength: 5 })} />
            {errors.name?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
          </div>
          <div className="input-group">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" {...register("category")}>
              <option value="muebles">Muebles</option>
              <option value="decoracion">Deboración</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" type="text" rows={5} {...register("description", { require: true })} />
            {errors.name?.type == "required" && (<span className="input-error">El campo es requerido</span>)}
          </div>
          <div className="input-group">
            <label htmlFor="CreateAt">Fecha de ingreso</label>
            <input id="createAt" type="date" {...register("createAt")} />
          </div>
          <button className="btn-principal" type="submit">{isEditing ? 'Actualizar' : 'Crear'}</button>
        </form>
      </div>
      {/* <section className="main-container container-table"> */}
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
                  <td>{product.createAt}</td>
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

      {/* </section> */}


    </div>
    </div>
  );
}