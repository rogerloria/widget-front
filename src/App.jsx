import { useState } from "react";
import FloatingButton from "./components/FloatingButton";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatWidget onClose={() => setOpen(false)} />}
      <FloatingButton onClick={() => setOpen(true)} />
    </>
  );
}
