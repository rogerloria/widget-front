import React, { useState } from "react";
import axios from "axios";

export default function LeadForm({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/leads?token=token-prueba", form);
      setSent(true);
    } catch (err) {
      console.error("Error al enviar lead", err);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 bg-white shadow-xl rounded-lg p-4 w-80 z-50">
      {sent ? (
        <div className="text-green-600">¡Gracias! Te contactaremos pronto.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-2">Contáctanos</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 mb-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-2 mb-2 rounded"
            required
          />
          <textarea
            placeholder="Mensaje"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-2 mb-2 rounded"
            required
          />
          <div className="flex justify-between">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Enviar
            </button>
            <button type="button" className="text-gray-500" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
