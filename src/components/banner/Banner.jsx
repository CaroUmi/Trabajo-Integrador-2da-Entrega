import { Link } from "react-router-dom";
import "./Banner.css";

export default function Banner(props) {
  return (
    <section className={`banner-page ${props.classImg}`}>
        <div className="main-banner-page">
            <div className="text-banner-page">
                <h1>{props.titlePage}</h1>
                <div className="breadcrumb">
                    <p><Link to="/">Inicio</Link></p>
                    <p>/</p>
                    <p>{props.page}</p>
                </div>
            </div>
        </div>
    </section>
  )
}
