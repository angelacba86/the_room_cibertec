import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RoutesApp from "./RoutesApp";
import Header from "./Modulos/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  </StrictMode>
);
