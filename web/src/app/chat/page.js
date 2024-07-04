"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Switch } from "@material-tailwind/react";
import Caller from "@/components/caller";

const genAI = new GoogleGenerativeAI('AIzaSyBQ_C13UOOXxqcZHciDZnLo1h-Zhp_yz3M');

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isVoiceBot, setIsVoiceBot] = useState(false);
  // async function run() {
    
  //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
  //   const prompt = "Write a story about a magic backpack."
  
  //   const result = await model.generateContent(prompt);
  //   const response = await result.response;
  //   const text = response.text();
  //   console.log(text);
  // }
  

  useEffect(() => {
    // Load initial chat history or welcome message from Gemini API here if needed
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();
      const reply = {
        id: Date.now(),
        text: text,
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
      <div className="p-4 flex justify-between">
       <h1 className="font-semibold text-lg md:text-2xl">{!isVoiceBot?'Chatbot':'Voicebot'}</h1>
        <div className="mr-4 flex gap-4 items-center">
          Chatbot
          <Switch onClick={()=>setIsVoiceBot(prev=>!prev)}/>
          Voicebot
        </div>
      </div>
      {!isVoiceBot&&<div className="flex-grow overflow-auto p-4 space-y-2 max-h-[calc(100vh-135px)] overflow-y-auto">
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
      </div>}
      {!isVoiceBot&&<div className="p-4">
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
      </div>}
      {isVoiceBot&&<Caller/>}
    </div>
  );
}
