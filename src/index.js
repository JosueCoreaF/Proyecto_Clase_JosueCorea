import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Estilos globales (Bootstrap)
import "bootstrap/dist/css/bootstrap.min.css";

// React 18 usa createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
