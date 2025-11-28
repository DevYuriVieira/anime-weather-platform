import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailCard.css';

const EmailCard = () => {
  const navigate = useNavigate();

  // Estados para capturar o que é digitado
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  
  // Estado para mensagem de erro
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- LÓGICA DO LOGIN FICTÍCIO ---
    // Aceita: admin/admin OU usuario/123456
    if (
      (inputEmail === 'admin' && inputPassword === 'admin') || 
      (inputEmail === 'usuario' && inputPassword === '123456')
    ) {
      // Sucesso! Limpa erro e navega
      setError('');
      navigate('/dashboard');
    } else {
      // Erro! Mostra mensagem
      setError('Invalid credentials! Try "admin" & "admin"');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-card">
      <h2>Welcome Back!</h2>
      <p>Enter your details to access the best of Anime & Weather.</p>
      
      <form className="login-form" onSubmit={handleLogin}>
        
        {/* MENSAGEM DE ERRO (Só aparece se errar a senha) */}
        {error && <div className="error-msg" style={{color: 'red', marginBottom: '10px', fontWeight: 'bold'}}>{error}</div>}

        {/* Campo de Login/Email */}
        <div className="input-group">
          <input 
            type="text" // Mudei de 'email' pra 'text' pra aceitar só "admin" sem @
            placeholder="User or Email" 
            required 
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>

        {/* Campo de Senha */}
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
        </div>

        {/* Botão ENTRAR */}
        <button type="submit" className="btn-login">
          Login
        </button>

        <div className="divider">or</div>

        {/* Botão CADASTRAR */}
        <button type="button" className="btn-signup" onClick={handleSignUp}>
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default EmailCard;