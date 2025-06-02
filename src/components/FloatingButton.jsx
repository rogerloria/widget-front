// src/components/FloatingButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton({ onClick }) {
  const config = window.widgetConfig || {};
  const buttonColor = config.primaryColor || '#22c55e'; // verde Tailwind por defecto
  const icon = config.buttonIcon || <FaWhatsapp size={24}/>;

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: buttonColor }}
      className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <span className="text-xl">{icon}</span>
    </button>
  );
}
