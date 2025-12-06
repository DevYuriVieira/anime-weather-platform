import React, { useState, useRef, useEffect } from "react";
import { useTheme } from '../../contexts/ThemeContext';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaCloudSun, FaPaperPlane, FaTimes } from "react-icons/fa";
import styles from "./GeminiChat.module.css";

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

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
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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

  const { isMoonlight } = useTheme();
  const moonColor = '#b8a8ff';
  return (
    <div className={styles.geminiChatWrapper}>
      {!isOpen && (
        <button
          className={`${styles.chatToggleBtn} ${isMoonlight ? styles.moonToggle : ''}`}
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat with Weather Otaku"
        >
          <FaCloudSun size={28} color={isMoonlight ? '#2d1b3d' : '#fff'} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerTitle}>
              <FaCloudSun color={isMoonlight ? '#2d1b3d' : '#fff'} /> <span>Weather Otaku</span>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <FaTimes color={isMoonlight ? '#2d1b3d' : '#fff'} />
            </button>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${styles[msg.sender]}`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.bot}`}>
                Charging chakra...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Ask me / Pergunte algo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} disabled={loading} className={`${styles.sendBtn} ${isMoonlight ? styles.moon : ''}`}>
              <FaPaperPlane color={isMoonlight ? '#2d1b3d' : '#fff'} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;