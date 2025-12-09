# 🌦️🎌 Anime Weather Platform — React, Weather Intelligence & AI Interaction

![Status](https://img.shields.io/badge/Status-Active-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-264DE4?logo=css3&logoColor=white)
![APIs](https://img.shields.io/badge/APIs-OpenWeather%20%7C%20Jikan%20%7C%20Gemini-orange)
![A11y](https://img.shields.io/badge/Accessibility-WCAG%202.1-AA-brightgreen)
![I18n](https://img.shields.io/badge/i18n-EN%20%7C%20PT--BR%20%7C%20ES-yellow)
![License](https://img.shields.io/badge/License-MIT-purple)

A modern and data-driven platform that merges **real-time weather analysis**, **atmospheric anime recommendations**, **adaptive interface themes**, and a **context-aware AI assistant**.  
Engineered with **scalable architecture**, **accessibility**, **internationalization readiness**, and **premium UX**.

---

## 📘 1. Overview

Anime Weather Platform is a **front-end orchestration system** that connects multiple APIs and transforms external data (weather, mood, genre) into a dynamic, intelligent and immersive experience.

This project demonstrates strong capabilities in:

- 🌐 API orchestration  
- 🎨 Adaptive, state-driven UI  
- 🧠 Multi-layered logic pipelines  
- 🏗️ Clean, scalable architecture  
- ♿ Accessibility foundations  
- 🌍 Internationalization readiness  
- 🤖 AI contextual guidance  

---

## ⚙️ 2. Core Capabilities

### 🎨 2.1 Adaptive Interface  
The UI theme seamlessly adapts to live weather conditions returned by OpenWeather.  
Built using **React Global State + CSS Modules** for fast, modular and maintainable styling.

### 🧭 2.2 Atmospheric Anime Recommendation Engine  
A custom logic layer maps:

```
Weather → Mood → Anime Genre
```

Examples:  
- ☀️ Clear → Slice of Life / Adventure  
- 🌧️ Rain → Drama / Mystery  
- ⛈️ Storm → Action / Psychological  

Powered by **Jikan API (MyAnimeList)** for curated, high-rated titles.

### 🤖 2.3 AI Weather Assistant  
Using **Google Gemini**, the assistant generates responses based on:
- City  
- Weather  
- Atmospheric mood  
- Recommended anime  

### 🎧 2.4 Immersive Experience  
- Adaptive themes  
- Lofi ambience  
- Glassmorphism  
- Micro-animations and transitions  

### 🔐 2.5 Simulated Authentication  
A basic but structured login (admin/admin) showcasing:
- Protected routes  
- Field validation  
- Redirect flow  

---

## 🛠️ 3. Technical Highlights

- Scalable component architecture  
- Efficient use of React Hooks  
- Multi-layered weather → mood → genre logic  
- Pure/stateless components where possible  
- CSS Modules for isolation and maintainability  
- SEO-ready structure  
- Internationalization preparation  

---

## 📁 4. Folder Structure

```
/
├── src/
│   ├── components/
│   │   ├── Weather/
│   │   ├── AnimeList/
│   │   ├── Auth/
│   │   └── Chatbot/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

---

## 🧩 5. Tech Stack

- ⚛️ React (Vite)  
- 🌦️ OpenWeather API  
- 🎌 Jikan API (MyAnimeList)  
- 🤖 Google Gemini SDK  
- 🟨 JavaScript ES6+  
- 🎨 CSS Modules  

---

## 🚀 6. How to Run

```bash
# Clone the repository
git clone https://github.com/DevYuriVieira/anime-weather-platform.git

# Enter the project directory
cd anime-weather-platform

# Install dependencies
npm install

# Create your environment file (.env)
VITE_WEATHER_KEY=your_openweather_key
VITE_GEMINI_API_KEY=your_gemini_key

# Start the project
npm run dev
```

---

## 🧭 7. Roadmap — Future Development

### 🖥️ 7.1 Back-End (Java + Spring Boot)
- REST aggregation service (weather + anime)  
- JWT Authentication  
- Token refresh pipeline  
- Logging / Metrics with Spring Actuator  
- AI context endpoint  

### 🗄️ 7.2 Database Layer
- PostgreSQL  
- Caching for genres/anime/weather  
- User preferences  
- AI chat history (optional)  

### 📱 7.3 Mobile App (React Native)
- Shared business logic  
- Offline mode  
- Haptic feedback  
- UI parity with web version  

### ♿ 7.4 Accessibility Enhancements
- Screen reader optimization  
- Dynamic font sizing  
- High contrast theme  
- Keyboard-only navigation  
- WCAG 2.1 Compliance  

### 🌍 7.5 Internationalization
- Portuguese (pt-BR)  
- Spanish (es-LA / es-ES)  
- Browser locale auto-detection  

### 🚀 7.6 Extended Features
- AI justify “Why this anime?”  
- Weather-based notifications  
- Analytics dashboard  
- Global heatmap of user requests  
- Theme presets library  
- OAuth2 login  

---

## 🔎 8. SEO — Recommended Meta Tags

```html
<title>Anime Weather Platform — React, Weather Intelligence & AI</title>
<meta name="title" content="Anime Weather Platform — React, Weather Intelligence & AI">
<meta name="description" content="A modern platform combining weather data, anime recommendations, dynamic UI themes and AI interaction. Built with clean architecture and global UX.">

<meta property="og:type" content="website">
<meta property="og:title" content="Anime Weather Platform">
<meta property="og:description" content="Weather-based anime recommendations with adaptive UX and AI interaction.">
<meta property="og:image" content="/your-image.png">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Anime Weather Platform">
<meta name="twitter:description" content="A powerful React platform integrating real-time weather, anime intelligence and AI.">
<meta name="twitter:image" content="/your-image.png">
```

---

## 👥 9. Authors

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/yuri-vieira-615131188/">
        <img src="https://avatars.githubusercontent.com/u/178693356?v=4" width="90px;" /><br />
        <b>Yuri Vieira</b>
      </a><br/>
      <a href="https://github.com/DevYuriVieira">GitHub</a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/micaela-paes/">
        <img src="https://avatars.githubusercontent.com/u/180624755?v=4" width="90px;" /><br />
        <b>Micaela Paes</b>
      </a><br/>
      <a href="https://github.com/MicaelaDinizP">GitHub</a>
    </td>
  </tr>
</table>

---

## 📄 10. License

MIT License — free to use, modify and distribute.



