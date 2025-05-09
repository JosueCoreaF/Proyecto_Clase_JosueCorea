import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar, { SideNavbar } from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <div className="d-flex flex-grow-1">
          {/* SideNavbar */}
          
          <div className="flex-grow-1 ms-5">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Puedes añadir más rutas aquí */}
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
