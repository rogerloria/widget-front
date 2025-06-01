import { useState } from "react";
import axios from "axios";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Token leído desde la variable global definida en la página que carga el widget
  const token = window.clientToken || "";

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length >= 8;
  };

  const handleSend = async () => {
    if (!token) {
      setError("Token no definido. Contacta al administrador.");
      return;
    }

    if (!name || !userPhone || !message) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validatePhone(userPhone)) {
      setError("El número de teléfono no es válido.");
      return;
    }

    setError("");

    const text = `Hola, mi nombre es ${name} (${userPhone}). ${message}`;
    const encoded = encodeURIComponent(text);
    const pymePhone = "50689858542";

    // Abre WhatsApp
    window.open(`https://wa.me/${pymePhone}?text=${encoded}`, "_blank");

    // También guarda el lead en el backend
    try {
      await axios.post(`http://localhost:8080/api/leads?token=${token}`, {
        name,
        phone: userPhone,
        message,
      });
      console.log("Lead guardado con éxito");
    } catch (err) {
      console.error("Error al guardar el lead:", err);
      setError("No se pudo guardar el lead. Intenta más tarde.");
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded p-2 text-sm"
      />
      <input
        type="tel"
        placeholder="Tu número de WhatsApp"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
        className="w-full border rounded p-2 text-sm"
      />
      <textarea
        placeholder="Tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded p-2 text-sm"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleSend}
        className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
      >
        Enviar a WhatsApp
      </button>
    </div>
  );
}
