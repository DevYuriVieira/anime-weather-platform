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

Here are the main meta tags used in this project, the same ones modern websites use to work well in search engines and on social media:

- **Basic**: <title>, <meta charset>, <meta name="viewport">, <link rel="icon">
- **SEO**: <meta name="description">, <meta name="author">
- **Social / Open Graph**: <meta property="og:title">, <meta property="og:description">, <meta property="og:image">
- **Fonts**: Google Fonts import for Roboto

These tags help the site display correctly in browsers, look good in search results and social shares, and make the user experience smoother.

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

# 🇧🇷🌦️🎌 Anime Weather Platform — React, Inteligência Climática & IA Contextual

Uma plataforma moderna e orientada a dados que combina **análise climática em tempo real**, **recomendações atmosféricas de anime**, **temas adaptativos** e **interação com IA**.  
Projetada com foco em escalabilidade, acessibilidade, arquitetura limpa e experiência global do usuário.

---

# 📘 1. Visão Geral

O Anime Weather Platform é um **sistema de orquestração front-end** que consome múltiplas APIs e transforma dados externos (clima, humor e gênero) em uma experiência dinâmica e inteligente.

A plataforma demonstra capacidades sólidas em:

- 🌐 Orquestração de APIs  
- 🎨 Interface adaptativa baseada em estado  
- 🧠 Lógica multilayer  
- 🏗️ Arquitetura front-end escalável  
- ♿ Fundamentos de acessibilidade  
- 🌍 Pronta para internacionalização  
- 🤖 Interação contextual com IA  

---

# ⚙️ 2. Funcionalidades Principais

### 🎨 2.1 Interface Adaptativa  
A interface muda com base no clima atual consumido pela API da OpenWeather.  
Desenvolvida com **React Global State + CSS Modules**.

### 🧭 2.2 Motor Atmosférico de Recomendação de Animes  
Uma camada lógica personalizada realiza o mapeamento:

```
Clima → Humor → Gênero de Anime
```

Exemplos:  
- ☀️ Céu Limpo → Slice of Life / Aventura  
- 🌧️ Chuva → Drama / Mistério  
- ⛈️ Tempestade → Ação / Psicológico  

Usa a **Jikan API (MyAnimeList)** para sugerir títulos bem avaliados.

### 🤖 2.3 Assistente de Clima com IA  
Integrado ao **Google Gemini**, permitindo conversas contextualizadas sobre:  
- Cidade  
- Clima atual  
- Humor  
- Animes recomendados  

### 🎧 2.4 Experiência de Usuário Imersiva  
- Temas dinâmicos  
- Glassmorphism  
- Ambiente opcional de Lofi  
- Microinterações  

### 🔐 2.5 Autenticação Simulada  
Fluxo simples (admin/admin) para demonstrar:  
- Rotas protegidas  
- Validação de entradas  
- Lógica de redirecionamento  

---

# 🛠️ 3. Destaques Técnicos

- Arquitetura modular e escalável  
- Uso eficiente de React Hooks  
- Lógica em camadas (clima → humor → gênero)  
- Separação clara de responsabilidades  
- Componentes puros quando aplicável  
- CSS Modules para manutenibilidade  
- Estrutura preparada para i18n  

---

# 📁 4. Estrutura de Pastas

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

# 🧩 5. Stack Tecnológica

- ⚛️ React (Vite)  
- 🌦️ OpenWeather API  
- 🎌 Jikan API (MyAnimeList)  
- 🤖 Google Gemini SDK  
- 🟨 JavaScript ES6+  
- 🎨 CSS Modules  

---

# 🚀 6. Como Executar

```bash
# Clone o repositório
git clone https://github.com/DevYuriVieira/anime-weather-platform.git

# Entre no diretório
cd anime-weather-platform

# Instale as dependências
npm install

# Arquivo de ambiente (.env)
VITE_WEATHER_KEY=sua_chave_openweather
VITE_GEMINI_API_KEY=sua_chave_gemini

# Inicie o projeto
npm run dev
```

---

# 🧭 7. Roadmap — Próximas Etapas

### 🖥️ 7.1 Back-End (Java + Spring Boot)  
- Serviço REST de agregação de dados  
- Autenticação JWT  
- Endpoint para lógica de IA  
- Logs e métricas (Spring Actuator)  

### 🗄️ 7.2 Banco de Dados  
- PostgreSQL  
- Tabelas de cache para clima/anime  
- Preferências do usuário  
- Histórico de conversas com IA (opcional)  

### 📱 7.3 Mobile (React Native)  
- Compartilhamento de lógica  
- Suporte offline  
- Feedback tátil  
- Componentes reutilizáveis  

### ♿ 7.4 Acessibilidade  
- Suporte a leitor de tela  
- Alto contraste  
- Navegação por teclado  
- Conformidade WCAG 2.1  

### 🌍 7.5 Internacionalização  
- Português (pt-BR)  
- Espanhol (es-ES / es-LA)  
- Detecção automática via navegador  

### 🚀 7.6 Funcionalidades Extras  
- Explicação da IA: “Por que esse anime?”  
- Dashboard global de clima/anime  
- Notificações baseadas no clima  
- Integrações OAuth2  
- Presets de temas  

---

# 🔎 8. SEO — Metatags Recomendadas

Aqui estão as principais meta tags que usamos no projeto, as mesmas que sites modernos usam para funcionar bem em buscadores e redes sociais:

- **Básicas**: <title>, <meta charset>, <meta name="viewport">, <link rel="icon">
- **SEO**: <meta name="description">, <meta name="author">
- **Redes sociais / Open Graph**: <meta property="og:title">, <meta property="og:description">, <meta property="og:image">
- **Fonte**: importação do Google Fonts para Roboto

Essas tags ajudam o site a ser exibido corretamente no navegador, aparecer bem em pesquisas e redes sociais, e deixar a experiência mais agradável para o usuário.

---

# 👥 9. Autores

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/yuri-vieira-615131188/">
        <img src="https://avatars.githubusercontent.com/u/178693356?v=4" width="90px;" /><br/>
        <b>Yuri Vieira</b>
      </a><br/>
      <a href="https://github.com/DevYuriVieira">GitHub</a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/micaela-paes/">
        <img src="https://avatars.githubusercontent.com/u/180624755?v=4" width="90px;" /><br/>
        <b>Micaela Paes</b>
      </a><br/>
      <a href="https://github.com/MicaelaDinizP">GitHub</a>
    </td>
  </tr>
</table>

---

# 📄 10. Licença

MIT License — livre para usar, modificar e distribuir.

