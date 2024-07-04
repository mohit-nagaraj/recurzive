"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Load initial chat history or welcome message from Gemini API here if needed
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post("YOUR_GEMINI_API_ENDPOINT", {
        message: input,
      });
      const reply = {
        id: Date.now(),
        text: response.data.reply,
        sender: "bot",
      };
      setMessages((messages) => [...messages, reply]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error or notify user here
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto p-4 space-y-2 max-h-[calc(100vh-135px)] overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 ${
                message.sender === "bot" ? "bg-gray-200" : "bg-black text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-grow p-2 border-2 rounded focus:outline-none focus:border-black"
            placeholder="Type your message here..."
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-black text-white rounded hover:bg-black focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
