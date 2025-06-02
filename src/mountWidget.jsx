// src/mountWidget.jsx import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Este import hace que Vite inyecte los estilos como <style>

// Verificá que el widget no se monte más de una vez
if (!document.getElementById("whatsapp-widget-container")) {
  // 1. Crear el host del Shadow DOM
  const host = document.createElement("div");
  host.id = "whatsapp-widget-container";
  document.body.appendChild(host);

  // 2. Crear el Shadow Root
  const shadowRoot = host.attachShadow({ mode: "open" });

  // 3. Clonar los estilos que Vite ya inyectó en el <head>
  const globalStyles = [...document.head.querySelectorAll("style")]
    .filter((s) => s.innerText.includes("--tw")); // Filtrar los estilos de Tailwind

  globalStyles.forEach((styleTag) => {
    const clone = styleTag.cloneNode(true);
    shadowRoot.appendChild(clone);
  });

  // 4. Crear un contenedor para React
  const reactRootDiv = document.createElement("div");
  shadowRoot.appendChild(reactRootDiv);

  // 5. Renderizar el componente React dentro del Shadow DOM
  const root = createRoot(reactRootDiv);
  root.render(<App />);
}
