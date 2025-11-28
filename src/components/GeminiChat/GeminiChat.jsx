import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaCloudSun, FaPaperPlane, FaTimes } from "react-icons/fa";
import "./GeminiChat.css";

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  
  /* MENSAGEM INICIAL NEUTRA/CONVIDATIVA */
  const [messages, setMessages] = useState([
    {
      text: "Yo! I am the Weather Otaku. ☀️🌧️ Talk to me in English or Portuguese!",
      sender: "bot",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
  const genAI = new GoogleGenerativeAI(API_KEY);

  const runChat = async (userMessage) => {
    try {
      /* --- ATUALIZADO PARA O MODELO FLASH (Mais rápido) --- */
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      /* --- PROMPT INTELIGENTE (POLIGLOTA) --- */
      const prompt = `
        You are "Weather Otaku", a fun assistant for the website "Anime & Weather".
        
        YOUR MISSION:
        1. Answer questions about Anime and Weather.
        2. MANDATORY: Make puns mixing Anime names with Weather conditions.
        
        LANGUAGE RULES:
        - Detect the language of the user's message ("${userMessage}").
        - If the user speaks Portuguese, reply in PORTUGUESE (Brazil).
        - If the user speaks English, reply in ENGLISH.
        
        Examples:
        - User: "Tá chovendo" -> Bot (PT): "Puxa, tá caindo um toró estilo Vila da Chuva! Cuidado pro Naruto não escorregar."
        - User: "Is it sunny?" -> Bot (EN): "Super sunny! Don't get roasted like Armin! Wear sunscreen."
        
        User message: "${userMessage}"
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("API Error:", error);
      /* Mensagem de erro genérica */
      return "My connection fell into a genjutsu... Check your API Key and restart the server! 😵‍💫";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const botResponseText = await runChat(input);

    const botMsg = { text: botResponseText, sender: "bot" };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="gemini-chat-wrapper">
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          <FaCloudSun size={28} />
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-title">
              <FaCloudSun /> <span>Weather Otaku</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot">Charging chakra...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask me / Pergunte algo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} disabled={loading}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;