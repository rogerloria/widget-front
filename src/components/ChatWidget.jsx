import WhatsAppForm from "./WhatsAppForm";

export default function ChatWidget({ onClose }) {
  return (
    <div className="fixed bottom-20 right-6 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-72">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Contacto por WhatsApp</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">✖</button>
      </div>
      <WhatsAppForm />
    </div>
  );
}