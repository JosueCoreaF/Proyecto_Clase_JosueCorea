import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../estilos/SideNavbar.css';

function SideNavbar({ onToggle }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (onToggle) onToggle(!isOpen);
  };

  return (
    <>
      {/* Botón para mostrar/ocultar */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Barra lateral */}
      <div className={`sidenav ${isOpen ? 'open' : 'closed'}`}>
        <ul className="nav flex-column mt-3">
          <li><Link to="/" className="nav-link">Dashboard</Link></li>
          <li><Link to="/" className="nav-link">Perfil</Link></li>
          <li><Link to="/books" className="nav-link">Libros</Link></li>
          <li><Link to="/" className="nav-link">Registro</Link></li>
        </ul>
      </div>
    </>
  );
}

export default SideNavbar;
