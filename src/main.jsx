// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Creamos y montamos el widget directamente aquí
const container = document.createElement("div");
container.id = "whatsapp-widget-container";
document.body.appendChild(container);

const root = createRoot(container);
root.render(<App />);
