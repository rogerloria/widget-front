// src/components/ChatWidget.jsx
import WhatsAppForm from "./WhatsAppForm";

export default function ChatWidget({ onClose }) {
  const config = window.widgetConfig || {};
  const formTitle = config.formTitle || "Contáctanos por WhatsApp";
  const primaryColor = config.primaryColor || '#22c55e';

  return (
    <div
      className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border-4"
      style={{ borderColor: primaryColor }}
    >
      <div
        className="flex justify-between items-center p-4 rounded-t-2xl"
        style={{ backgroundColor: primaryColor, color: 'white' }}
      >
        <h2 className="text-base font-semibold">{formTitle}</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-red-300 text-lg transition-colors"
        >
          ✖
        </button>
      </div>
      <div className="p-4">
        <WhatsAppForm />
      </div>
    </div>
  );
}
