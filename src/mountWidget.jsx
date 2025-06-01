import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Importa los estilos del widget

// Verificá que el widget no se monte más de una vez
if (!document.getElementById("whatsapp-widget-container")) {
  const container = document.createElement("div");
  container.id = "whatsapp-widget-container";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<App />);
}
