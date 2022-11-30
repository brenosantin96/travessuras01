import { NavLink } from "react-router-dom"
import logoIMG from "../../imgs/logo22.png";
import '../index.css';


export const CustomNavBar2 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navAttributes">
            <div className="container-fluid d-flex">
                <div className="logo">
                    <NavLink className="navbar-brand linksnavbarMenu" to="/">
                       <h2 className="mx-1">Travessuras Kids</h2>
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mx-5">
                        <li className="nav-item">
                            <NavLink className="linksnavbarMenu" to="/">Início</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="linksnavbarMenu" to="/about">Sobre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="linksnavbarMenu" to="/products">Produtos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="linksnavbarMenu" to="/contact">Contato</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}