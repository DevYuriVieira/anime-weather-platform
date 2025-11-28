import React, { useState } from "react";
// Importando o hook pra poder navegar entre as páginas sem recarregar
import { useNavigate } from "react-router-dom";
import "./Signup.css";
// Puxando a nossa logo pra colocar no topo do card
import logoImg from "../assets/images/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  // Estado pra guardar tudo que o usuário digitar no formulário
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    country: "",
    favoriteWeather: "",
  });

  // Estado pra controlar a mensagem de feedback (se deu bom ou ruim)
  const [message, setMessage] = useState({ type: "", text: "" });

  // Função genérica pra atualizar qualquer campo do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função que roda quando clica em "REGISTER NOW"
  const handleSubmit = (e) => {
    e.preventDefault(); // Não deixa a página recarregar
    setMessage({ type: "", text: "" }); // Limpa msg antiga

    const { email, confirmEmail, password, confirmPassword, country, favoriteWeather } = formData;

    // 1. Verificando se tem campo vazio
    if (!email || !confirmEmail || !password || !confirmPassword || !country || !favoriteWeather) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    // 2. Checando se o email é válido (tem @ e .)
    if (!email.includes("@") || !email.includes(".")) {
      setMessage({ type: "error", text: "Invalid Email format." });
      return;
    }

    // 3. Batendo os emails
    if (email !== confirmEmail) {
      setMessage({ type: "error", text: "Emails do not match." });
      return;
    }

    // 4. Senha curta demais
    if (password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }

    // 5. Batendo as senhas
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    // Se passou por tudo, SUCESSO!
    setMessage({ type: "success", text: "Registered Successfully! Welcome to the guild." });
    
    // Manda o usuário de volta pra Home depois de 2 segundos
    setTimeout(() => {
      navigate("/"); 
    }, 2000);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        
        {/* CABEÇALHO DO CARD COM A LOGO */}
        <div className="card-header">
          <img src={logoImg} alt="Anime & Weather" className="signup-logo" />
          <h2>Create Account</h2>
          <p>Join the adventure!</p>
        </div>

        {/* BOX DE MENSAGEM (Só aparece se tiver texto) */}
        {message.text && (
          <div className={`message-box ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="signup-form">
          
          {/* Grupo de Emails */}
          <div className="form-group">
            <input 
              type="email" name="email" placeholder="Email Address" 
              value={formData.email} onChange={handleChange} 
            />
            <input 
              type="email" name="confirmEmail" placeholder="Confirm Email" 
              value={formData.confirmEmail} onChange={handleChange} 
            />
          </div>

          {/* Grupo de Senhas */}
          <div className="form-group">
            <input 
              type="password" name="password" placeholder="Password" 
              value={formData.password} onChange={handleChange} 
            />
            <input 
              type="password" name="confirmPassword" placeholder="Confirm Password" 
              value={formData.confirmPassword} onChange={handleChange} 
            />
          </div>

          {/* Grupo de Seleção (País e Clima) */}
          <div className="form-group">
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="" disabled>Select your Country</option>
              <option value="Brazil">Brazil</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other</option>
            </select>

            <select name="favoriteWeather" value={formData.favoriteWeather} onChange={handleChange}>
              <option value="" disabled>Favorite Weather?</option>
              <option value="Sunny">Sunny ☀️</option>
              <option value="Rainy">Rainy 🌧️</option>
              <option value="Stormy">Stormy ⛈️</option>
              <option value="Snowy">Snowy ❄️</option>
              <option value="Cloudy">Cloudy ☁️</option>
            </select>
          </div>

          {/* Botão de Cadastro */}
          <button type="submit" className="btn-register">
            Register Now
          </button>

          {/* Link pra voltar pro login se já tiver conta */}
          <p className="login-link">
            Already have an account? <span onClick={() => navigate("/")}>Login here</span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Signup;