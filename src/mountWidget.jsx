import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Importa los estilos del widget

// Verificá que el widget no se monte más de una vez
if (!document.getElementById("whatsapp-widget-container")) {
  // 1. Crear un host para el Shadow DOM
  const host = document.createElement("div");
  host.id = "whatsapp-widget-container";
  document.body.appendChild(host);

  // 2. Crear el Shadow DOM
  const shadowRoot = host.attachShadow({ mode: "open" });

  // 3. Crear un wrapper interno donde React montará el componente
  const reactRootDiv = document.createElement("div");
  shadowRoot.appendChild(reactRootDiv);

  // 4. Inyectar estilos dentro del Shadow DOM
  const styleLink = document.createElement("link");
  styleLink.setAttribute("rel", "stylesheet");
  styleLink.setAttribute("href", new URL("./index.css", import.meta.url));
  shadowRoot.appendChild(styleLink);

  // 5. Renderizar React en ese div dentro del shadow
  const root = createRoot(reactRootDiv);
  root.render(<App />);
}
