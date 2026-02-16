import { useEffect, useState } from "react";


function MessagesList({ messages }) {
  return (
    <div>
      {messages.map((m) => (
        <div
          key={m.id}
          style={{
            borderBottom: "1px solid #ddd",
            marginBottom: 10,
            paddingBottom: 5,
          }}
        >
          <strong>{m.name}</strong>
          <p>{m.message}</p>
          <small>{new Date(m.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}


function GuestbookForm({ onMessageSent }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    setName("");
    setMessage("");
    onMessageSent();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default function Guestbook() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await fetch("/messages");
    const data = await res.json();
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: 600,
        margin: "40px auto",
      }}
    >
      <h1>Guestbook</h1>

      <GuestbookForm onMessageSent={loadMessages} />

      <h2>Mensajes</h2>
      <MessagesList messages={messages} />
    </div>
  );
}