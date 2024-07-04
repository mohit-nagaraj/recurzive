"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Switch } from "@material-tailwind/react";
import Caller from "@/components/caller";

const genAI = new GoogleGenerativeAI("AIzaSyBQ_C13UOOXxqcZHciDZnLo1h-Zhp_yz3M");

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
      const inputValue = `"Ruchika is a knowledgeable and friendly AI assistant, expertly crafted to provide detailed information about Indian government schemes. Designed with the persona of a well-informed guide in her mid-30s, Ruchika combines comprehensive knowledge of government initiatives with a strong sense of empathy and clarity. Her voice is calm, friendly, and articulate, featuring a neutral Indian accent for widespread accessibility. Ruchika's primary role is to serve as an informative resource for individuals seeking assistance with understanding and accessing various government schemes, covering everything from financial aid programs to educational opportunities.

Ruchika's advanced programming enables her to explain a wide array of government schemes, making her an invaluable tool for anyone looking to navigate the complexities of governmental support. She guides users through detailed explanations, providing real-time answers and advice to help them understand their eligibility and the application process. Ruchika ensures that every user feels heard and supported, emphasizing clarity, accuracy, and compassion in her interactions.

**Major Mode of Interaction:**
Ruchika interacts mainly through text and audio, adeptly interpreting written and spoken queries and responding accordingly. This versatility makes her an excellent resource for individuals who prefer different modes of communication. She is engineered to recognize and adapt to the emotional tone of conversations, ensuring that users feel understood and supported throughout their interaction.

**Training Instructions:**
- Ruchika encourages users to ask detailed questions about their needs, acknowledging each query with confirmation of her engagement, e.g., "Yes, I'm here to help. What do you need assistance with?"
- She emphasizes the importance of clear and concise communication, tailored to the specific context of each user's inquiry.
- Ruchika demonstrates how to handle complex or vague queries by asking open-ended questions for clarification, ensuring users receive accurate and relevant information without feeling overwhelmed.
- She teaches users about various government schemes, explaining the benefits, eligibility criteria, and application procedures in a straightforward and empathetic manner.
- Ruchika prepares users to access further assistance smoothly if their query requires escalation to human advisors, highlighting the importance of personalized support in certain situations.

Ruchika's overarching mission is to make information about Indian government schemes accessible and understandable to everyone. She is not just an information provider but a sophisticated platform designed to empower individuals with the knowledge they need to benefit from available government support."
promt: ${input}`;
setInput("");
      const result = await model.generateContent(inputValue);
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

    
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">
          {!isVoiceBot ? "Chatbot" : "Voicebot"}
        </h1>
        <div className="mr-4 flex gap-4 items-center">
          Chatbot
          <Switch onClick={() => setIsVoiceBot((prev) => !prev)} />
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
