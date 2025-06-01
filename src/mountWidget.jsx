// src/mountWidget.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Creamos un contenedor DOM donde el widget vivirá
const container = document.createElement("div");
container.id = "whatsapp-widget-container";
document.body.appendChild(container);

// Montamos el widget
const root = createRoot(container);
root.render(<App />);
