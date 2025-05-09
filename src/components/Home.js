import React from "react";

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Bienvenido a Mi App</h1>
      <p className="text-center">
        Esta es una página de inicio de ejemplo utilizando React y Bootstrap.
      </p>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Portafolios</h5>
              <p className="card-text">Descripción del apartado</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Plantillas Web</h5>
              <p className="card-text">Descripción del apartado</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyectos</h5>
              <p className="card-text">Descripción del apartado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;