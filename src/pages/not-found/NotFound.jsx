import './NotFound.css'; 
import { Link } from 'react-router-dom';

export default function NotFound() {
  const noHeader = true;

  return (
    <div className='notFound'>
      <div className="text-notFound">
      <h3>Ooopss!</h3>
      <h4>No pudimos encontrar lo que buscas</h4>
      <button className='btn-principal'><Link to="/">Ir a la tienda</Link></button>
      </div>
    </div>
  )
}
