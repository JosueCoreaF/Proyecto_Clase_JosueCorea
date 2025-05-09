import { Link } from "react-router-dom";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

function SideNavbar() {
    return (
        <div className="bg-secondary vh-100 d-flex flex-column p-3" style={{ width: "200px", position: "fixed", top: 0, left: 0 }}>
            <ul className="nav flex-colum mt-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">
                        <FaHome className="me-2" />Inicio
                    </Link>
                    <Link to="/" className="nav-link text-white">
                        <FaHome className="me-2" />perfil
                    </Link>
                </li>
            </ul>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bootstrap’s </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
export { SideNavbar };