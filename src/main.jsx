import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Proveedor } from "./contexts/contextoCodigo";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Proveedor>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Proveedor>
  </React.StrictMode>
);
