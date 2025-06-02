import { useState } from "react";
import axios from "axios";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const config = window.widgetConfig || {};
  const token = window.clientToken || "";
  // const pymePhone = config.pymePhone || "50689858542";
  const primaryColor = config.primaryColor || "#22c55e";
  const placeholderName = config.placeholderName || "Tu nombre";
  const placeholderPhone = config.placeholderPhone || "Tu número de WhatsApp";
  const placeholderMsg = config.placeholderMsg || "Tu mensaje";
  const sendBtnText = config.sendBtnText || "Enviar a WhatsApp";

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
    setIsSending(true);

    try {
      await axios.post(`http://localhost:8080/api/leads?token=${token}`, {
        name,
        phone: userPhone,
        message,
      });

      setName("");
      setUserPhone("");
      setMessage("");
      setSuccess("¡Gracias! Tu mensaje fue enviado exitosamente.");
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      console.error("Error al guardar el lead:", err);
      setError("No se pudo enviar el mensaje. Intenta más tarde.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-3 text-sm">
      <input
        type="text"
        placeholder={placeholderName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="tel"
        placeholder={placeholderPhone}
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <textarea
        placeholder={placeholderMsg}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        rows={3}
      />
      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleSend}
        disabled={isSending}
        style={{ backgroundColor: primaryColor }}
        className="w-full text-white py-2 rounded font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {sendBtnText}
      </button>
    </div>
  );
}
